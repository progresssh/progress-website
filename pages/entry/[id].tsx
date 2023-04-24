import { format, fromUnixTime } from "date-fns";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { journalPost } from "../../types/journalPost";
import StarterKit from "@tiptap/starter-kit";
import { generateHTML } from "@tiptap/html";
import Layout from "../../components/layout";
import Link from "next/link";
import TiptapLink from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

const Entry = (props: journalPost) => {
  const content = generateHTML(props.body, [
    StarterKit.configure({
      gapcursor: false,
      codeBlock: false,
      dropcursor: false,
      heading: { levels: [1, 2, 3, 4, 5, 6] },
    }),
    TiptapLink,
    Image,
  ]);

  const title = props.title;
  const time = fromUnixTime(props.time);

  return (
    <Layout title={title}>
      <div className="h-full w-full  md:flex md:justify-center overflow-auto bg-[#090909]">
        <div className="md:w-5/12 p-8">
          <div className=" text-gray-300">
            <Link href={"/"} aria-label="Back to homepage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </Link>

            <h1 className="text-[#FFD600] text-2xl font-bold font-quantico pt-4">
              {title}
            </h1>
            <h2 className="font-quantico text-xs md:text-sm">
              {format(time, "dd LLLL yyyy")}
            </h2>
            <main>
              <article className="prose prose-invert py-4 font-opensans leading-normal text-[0.87rem] md:text-[1.00rem]">
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "journal"));
  querySnapshot.forEach((doc) => {
    const newData = { id: doc.id, ...doc.data() };
    data.push(newData);
  });

  const paths = data.map((post) => {
    return {
      params: { id: post.id },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const docRef = doc(db, "journal", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();

  return { props: data };
}

export default Entry;
