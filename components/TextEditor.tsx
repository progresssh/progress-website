import Image from "@tiptap/extension-image";
import {
  useEditor,
  EditorContent,
  JSONContent,
  generateHTML,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useMemo, useState } from "react";
import { Editor } from "@tiptap/react";

const samplePost = `# START OF THE JOURNEY

The following is a review of my month of August, where the Progress journey truly started.

## Prelude

First let us peek at a bit of my past. There was many projects alike Progress, spur-of-the-moment resurrections where suddenly I'd be infused with intense energy, a will to live, to get out there and explore the world beyond the confines of my bed. I remember many starting from when I was 10 years old, each one would fail in the span of 1 to 4 weeks but pave the way for the future, storing knowledge to be used for the next attempts. Over time I would gradually build resistance to hope, knowing the fall would be harder if I made the effort to believe. I've gone long periods where I couldn't do anything anymore, I'd stay on my bed, daydreaming, sleeping for 18 - 20 hours a day.

Something couldn't leave my side though and that was dreaming, circumstances led me to be broken but I never could give up on what's out there in the fabricated visions I have of the world. Today still, I have a hard time getting past the feeling-repelling armor I've burdened myself with except for the moments I remember those fantasies.

## Intangible Chains

Every time the opportunity new try arose, I'd feel as if it would be the last time I'd ever get a shot at life. I would suddenly awake from a deep slumber where I was entrapped in a world with no will, love, or interest, I couldn't touch or interact with anything. I'd just be there. I can't answer to questions like "What advice would you give to your old self?" because I feel as if there was nothing that could have been done. What incentive did I have to do so? I knew full well what was happening, but there was nothing to grasp, I was only withering away towards my final deliverance.

Even now, I believe I'm insanely lucky to have these moments of consciousness, how many are entrapped for their whole lives? I don't know if it's true, if for some there are truly no ways out. I even miss that situation sometimes, something compelling about being in your own prison until you can't tell the passage of time anymore, I'll probably expand on that in another post.

Although the chains still weight on me to go back and forget myself to bed, what I live now is a rare occurrence I never managed to provoke, this light just shines all of the sudden and I have to do my best never to let it go.

## So, concretely what's been happening?

I am "self-learning" (plenty of unconventional teachers on the internet!) web development as of now, ultimately among other things I want to do math and computer science, study things from the ground up, I'm new at doing stuff so this is a good entry point.

In June, I managed to study 30 to 15mn sessions per week, finally getting a foot on the ground, despite falling asleep in front of the computer after those focused sessions.

In July, I started to work-out, go on walks and keep the weekly 30 to 15mn study up, slowly starting to be able to manage fatigue as I no longer fell asleep despite being tired.

In August, my mind finally set-in and I could finally take decisions and get a feel for myself with the control I built up, in total I studied for 36 hours. I learned basics of HTML CSS, now going through the basics of JavaScript. I appreciate that my will is unfaltering, not at a single moment I thought the next thing would prove to be impossible or that my aspirations were vain, I was left to find out. It was hard to stay focused for three consecutive hours (with breaks in between) reading docs and making programs but I somehow pulled it off. The chains definitely intensified in strength but where those same ghosts would entrap me for months or years, this time it was only for a week before I'd comeback again.

I've been cooking nice meals for myself and been going for walks (sadly I haven't gone working out, I'll see you soon gym of mine!). It's hard to stay conscious, to question myself and where I'm going as the effort of doing stuff is taking a toll on my clarity. I'm confident this will get better though.

I'm looking forward to September, consolidating on the "short-comings" of August. I have plans for art and videos, I really, really want to get started with math now but I suppose workload and productivity are things that are earned through thoughtful effort, it's probably too early to pull-off long focused sessions of multi-subject studies but it's not too far either.

I'm getting there! It's a fierce fight but it's one I'm lucky to have.`;

const FixedMenu = ({ editor }: { editor: Editor }) => {
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
  return (
    <div
      className="bg-white w-full sticky h-24
  "
    >
      <div className="space-x-2">
        <button onClick={handleBoldButton}>Bold</button>
        <button onClick={handleItalicButton}>Italic</button>
        <button onClick={handleStrikeButton}>Strikethrough</button>

        <button onClick={handleBulletListButton}>Bulletlist</button>
      </div>
    </div>
  );
};

const TextEditor = () => {
  const [post, setPost] = useState<JSONContent | null>(null);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "prose ",
      },
    },
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

  return (
    <div className="">
      <FixedMenu editor={editor} />
      <EditorContent editor={editor} />
      <button onClick={() => setPost(editor.getJSON())}>Get Data</button>
    </div>
  );
};

export default TextEditor;
