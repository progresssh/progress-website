import React, { useCallback, useMemo, useState } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { Transforms, createEditor, Node, Element as SlateElement } from "slate";
import { withHistory } from "slate-history";
import { useAuth } from "./contexts/userContext";

const withLayout = (editor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]) => {
    if (path.length === 0) {
      if (editor.children.length < 1) {
        const title = {
          type: "title",
          children: [{ text: "Untitled" }],
        };
        Transforms.insertNodes(editor, title, { at: path.concat(0) });
      }

      if (editor.children.length < 2) {
        const paragraph = {
          type: "paragraph",
          children: [{ text: "" }],
        };
        Transforms.insertNodes(editor, paragraph, { at: path.concat(1) });
      }

      for (const [child, childPath] of Node.children(editor, path)) {
        let type;
        const slateIndex = childPath[0];
        const enforceType = (type) => {
          if (SlateElement.isElement(child) && child.type !== type) {
            const newProperties = { type };
            Transforms.setNodes(editor, newProperties, {
              at: childPath,
            });
          }
        };

        switch (slateIndex) {
          case 0:
            type = "title";
            enforceType(type);
            break;
          case 1:
            type = "paragraph";
            enforceType(type);
          default:
            break;
        }
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};

const Submit = ({ post, postDocument }) => {
  const handleClick = () => {
    postDocument(post);
  };

  return (
    <button className="font-quantico pt-4 pb-4" onClick={() => handleClick()}>
      Submit Post
    </button>
  );
};

const TextEditor = () => {
  const { postDocument, isProgress } = useAuth();
  const [post, setPost] = useState(initialValue);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const editor = useMemo(
    () => withLayout(withHistory(withReact(createEditor()))),
    []
  );

  return (
    <>
      {isProgress && (
        <div>
          <Slate
            editor={editor}
            value={initialValue}
            onChange={(value) => {
              const isAstChange = editor.operations.some(
                (op) => "set_selection" !== op.type
              );
              if (isAstChange) {
                setPost(value);
              }
            }}
          >
            <Editable
              renderElement={renderElement}
              placeholder="Enter a title…"
              spellCheck
              autoFocus
              className="border-2 border-white p-4 "
            />
          </Slate>
          <Submit post={post} postDocument={postDocument} />
        </div>
      )}
    </>
  );
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "title":
      return (
        <h1
          className="text-2xl font-quantico font-bold text-[#FFD600]"
          {...attributes}
        >
          {children}
        </h1>
      );
    case "paragraph":
      return (
        <p
          className=" font-opensans leading-normal text-[0.87rem] md:text-[1.05rem]"
          {...attributes}
        >
          {children}
        </p>
      );
  }
};

const initialValue = [
  {
    type: "title",
    children: [{ text: "Title" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Content",
      },
    ],
  },
];

export default TextEditor;
