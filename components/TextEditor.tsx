import Image from "@tiptap/extension-image";
import { useEditor, EditorContent, isActive } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { Editor } from "@tiptap/react";
import { useAuth } from "./contexts/userContext";
import { Link } from "@tiptap/extension-link";

const FixedMenu = ({
  editor,
  setPostMode,
}: {
  editor: Editor;
  setPostMode: Dispatch<SetStateAction<"journal" | "transmissions">>;
}) => {
  const handleModeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const mode = e.target.value;
    if (mode === "transmissions" || mode === "journal") {
      setPostMode(mode);
    } else {
      console.error("incorrect mode: must be transmissions or journal");
    }
  };
  const handleBoldButton = () => {
    editor.chain().focus().toggleBold().run();
  };
  const handleItalicButton = () => {
    editor.chain().focus().toggleItalic().run();
  };
  const handleStrikeButton = () => {
    editor.chain().focus().toggleStrike().run();
  };

  const handleBulletListButton = () => {
    editor.chain().focus().toggleBulletList().run();
  };
  const handleLinkButton = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <div
      className="bg-white text-black font-quantico w-full md:w-1/2 
  "
    >
      <div className="flex justify-evenly">
        <button
          onClick={handleBoldButton}
          className={editor?.isActive("bold") ? "font-bold" : ""}
        >
          Bold
        </button>
        <button
          onClick={handleItalicButton}
          className={editor?.isActive("italic") ? "font-bold" : ""}
        >
          Italic
        </button>
        <button
          onClick={handleStrikeButton}
          className={editor?.isActive("strike") ? "font-bold" : ""}
        >
          Strike
        </button>
        <button
          onClick={handleLinkButton}
          className={editor?.isActive("link") ? "font-bold" : ""}
        >
          Link
        </button>
        <button
          onClick={handleBulletListButton}
          className={editor?.isActive("bulletList") ? "font-bold" : ""}
        >
          Bulletlist
        </button>
        <select name="mode" onChange={handleModeChange}>
          <option value="journal">journal</option>
          <option value="transmissions">transmissions</option>
        </select>
      </div>
    </div>
  );
};

const TextEditor = () => {
  const { postDocument, isProgress } = useAuth();
  const [postMode, setPostMode] = useState<"journal" | "transmissions">(
    "journal"
  );

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault;
    postDocument(editor.getJSON(), postMode);
  };

  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose prose-invert w-full h-full py-4 px-4 m-auto border font-opensans leading-normal text-[0.87rem] md:text-[1.00rem]",
      },
    },
    extensions: [
      StarterKit.configure({
        gapcursor: false,
        dropcursor: false,
        codeBlock: false,
        heading: { levels: [1, 2, 3, 4, 5, 6] },
      }),
      Link,
    ],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <>
      {isProgress && (
        <div className="h-full w-full flex flex-col items-center">
          <FixedMenu editor={editor} setPostMode={setPostMode} />
          <EditorContent editor={editor} className="my-2 w-full" />
          <button
            onClick={(e) => handleSubmit(e)}
            className="border p-2 font-quantico text-center w-full md:w-1/6"
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default TextEditor;
