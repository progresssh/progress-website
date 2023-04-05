import Image from "@tiptap/extension-image";
import {
  useEditor,
  EditorContent,
  JSONContent,
  generateHTML,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useMemo, useState } from "react";

const TextEditor = () => {
  const [post, setPost] = useState<JSONContent | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        gapcursor: false,
        dropcursor: false,
        heading: { levels: [1, 2, 3] },
      }),
      Image,
    ],
    content: "<p>Hello World! 🌎️</p>",
  });

  const output = useMemo(() => {
    if (post) {
      return generateHTML(post, [
        StarterKit.configure({
          gapcursor: false,
          dropcursor: false,
          heading: { levels: [1, 2, 3] },
        }),
        Image,
      ]);
    } else {
      return;
    }
  }, [post]);

  return (
    <div>
      <EditorContent editor={editor} />
      <button onClick={() => setPost(editor.getJSON)}>Get Data</button>
      <div>{output}</div>
    </div>
  );
};

export default TextEditor;
