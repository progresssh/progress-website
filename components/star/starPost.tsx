
import StarterKit from "@tiptap/starter-kit";
import { generateHTML } from "@tiptap/html";
import Link from "next/link";
import TiptapLink from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { format, fromUnixTime } from "date-fns";

import Layout from "../layout";
import { StarPost } from "../../types/starPost";

const Star = (props: StarPost) => {
  const data = props;

  const content = generateHTML(data.body, [
    StarterKit.configure({
      gapcursor: false,
      codeBlock: false,
      dropcursor: false,
      heading: { levels: [1, 2, 3, 4, 5, 6] },
    }),
    TiptapLink,
    Image,
  ]);

  const title = data.title;
  const time = fromUnixTime(data.time);

  return (
    <Layout title={title}>
      <div className="h-full w-full md:flex md:justify-start overflow-auto bg-[#090909]">
        <div className="p-8 ">
          <div className="text-gray-300">
            <Link href={"/star"} className={"text-rose-600"} aria-label="Back to stars">✦✧✦✧✦</Link>
            <h1 className={`text-2xl font-bold font-quantico pt-4 text-rose-600`}>
              {title}
            </h1>
            <h2 className="font-quantico text-xs md:text-sm">
              {format(time, "dd LLLL yyyy")}
            </h2>
            <main>
              <article className="prose prose-invert py-4 font-opensans leading-normal text-[0.94rem] md:text-[1.05rem]">
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </article>
            </main>
            <footer className=" font-quantico pb-8">Starry skies, heal their minds.</footer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Star;