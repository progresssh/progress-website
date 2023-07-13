import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import Layout from "../components/layout";
import PaginatedList from "../components/paginatedItems";
import { GetStaticProps } from "next";
import { journalPost } from "../types/journalPost";

export default function Homepage({ data }: { data: journalPost }) {
  const title = "Progress";
  return (
    <Layout title={title}>
      <div className="flex h-full flex-col p-2 md:p-0 justify-center bg-[#090909] origin-[50vw_50vh]">
        <div className="flex flex-col h-full md:flex-row md:justify-evenly justify-between items-center">
          <div className="w-11/12 text-white flex flex-col text-sm md:w-32 h-1/4 md:m-0 self-center break-words justify-center  font-quantico ">
            <h2 className="text-[#FFD600] text-xs text-right">journal</h2>
            <PaginatedList data={data} items={3} />
          </div>

          <div className=" flex h-full md:self-center md:pl-0 md:items-center flex-col justify-center">
            <Link href="/oasis" aria-label="To Oasis">
              <video
                src={require("../public/star.mp4")}
                muted
                autoPlay
                loop
                disableRemotePlayback={true}
                playsInline
                height={480}
                width={480}
              />
            </Link>
            <div className="md:absolute mt-4 bottom-5 self-center text-center">
              <h1 className="font-rajdhani font-light text-3xl text-white">
                PROGRESS
              </h1>
              <h2 className="text-[#FFD600] font-rajdhani font-light text-base md:text-lg">
                Let&apos;s all do our best.
              </h2>
            </div>
          </div>

          <div className="flex flex-col pl-4 pb-4 md:pb-0 md:h-auto text-sm md:m-0 md:w-40 self-start md:self-center font-quantico">
            <h3 className="text-[#FFD600] text-xs mb-2">information</h3>
            <div className="text-white flex flex-col flex-grow md:flex-col space-y-2 md:space-y-2">
              <div className="space-x-8 md:flex md:flex-col md:space-x-0 md:space-y-2">
                <Link href="/about" aria-label="About Page">
                  About
                </Link>
                <Link
                  href="https://secondsight.app"
                  aria-label="Second Sight"
                  target="_blank"
                >
                  Second Sight
                </Link>
                <Link
                  href="mailto:star@progress.sh"
                  aria-label="Email"
                  target="_blank"
                >
                  star@progress.sh
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data: journalPost[] = [];

  const querySnapshot = await getDocs(collection(db, "journal"));
  querySnapshot.forEach((doc) => {
    const newData = { key: doc.id, ...doc.data() } as journalPost;
    data.push(newData);
  });

  return {
    props: { data },
  };
};
