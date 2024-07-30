import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/layout";
import PaginatedList from "../../components/paginatedItems";
import { db } from "../../firebase";
import { journalPost } from "../../types/journalPost";

function RedirectToHome({ data }: { data: journalPost[] }) {
  const title = "Entries";

  return (
    <Layout title={title}>
      <div className="flex h-full flex-col p-8 items-center bg-[#090909]">
        <Link href="/" aria-label="To Home">
          <video
            src={require("../../public/star.mp4")}
            muted
            autoPlay
            loop
            playsInline
            height={128}
            width={128}
          />
        </Link>
        <div className=" text-white flex flex-col text-sm items-center mt-8 h-1/4 break-words w-1/2 font-quantico">
          <h2 className="text-[#FFD600] text-base">transmissions</h2>
          <div className="space-y-4">
            <PaginatedList data={data} items={12} isTransmission={true} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data: journalPost[] = [];

  const querySnapshot = await getDocs(collection(db, "transmissions"));
  querySnapshot.forEach((doc) => {
    const newData = { key: doc.id, ...doc.data() } as journalPost;
    data.push(newData);
  });

  return {
    props: { data },
  };
};

export default RedirectToHome;
