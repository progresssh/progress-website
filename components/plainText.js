import React, { useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";

const PlainTextEditor = ({ setText, text }) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate
      editor={editor}
      value={text}
      onChange={(value) => {
        const isAstChange = editor.operations.some(
          (op) => "set_selection" !== op.type
        );
        if (isAstChange) {
          setText(value);
        }
      }}
    >
      <Editable placeholder="Leave a message behind..." />
    </Slate>
  );
};

export default PlainTextEditor;
