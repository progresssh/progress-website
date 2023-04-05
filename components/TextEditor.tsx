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
        codeBlock: false,
        heading: { levels: [1, 2, 3] },
      }),
      Image,
    ],
    content: "<p>Hello World! 🌎️</p>",
  });

  const output = () => {
    if (post) {
      return generateHTML(post, [
        StarterKit.configure({
          gapcursor: false,
          codeBlock: false,
          dropcursor: false,
          heading: { levels: [1, 2, 3] },
        }),
        Image,
      ]);
    }
  };

  console.log(output());
  return (
    <div>
      <EditorContent editor={editor} />
      <button onClick={() => setPost(editor.getJSON())}>Get Data</button>
      <div
        className="prose prose-xl"
        dangerouslySetInnerHTML={{ __html: output() }}
      ></div>
    </div>
  );
};

export default TextEditor;
