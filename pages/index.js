import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import Layout from "../components/layout";
import PaginatedList from "../components/paginatedItems";

export default function Homepage({ data }) {
  const title = "Progress";
  return (
    <Layout title={title}>
      <div className="flex h-full flex-col p-2 md:p-0 justify-center bg-[#090909]">
        <div className="flex flex-col  h-full md:mb-4 md:flex-row md:justify-evenly justify-between items-center  ">
          <div className="w-11/12 text-white flex flex-col text-sm md:w-32 h-1/4 md:m-0 self-center break-words justify-center  font-quantico ">
            <h2 className="text-[#FFD600] text-xs">journal</h2>
            <PaginatedList data={data} items={3} />
          </div>
          <Link href="/oasis" className="grow h-1/4 p-8 ">
            <a aria-label="To Oasis">
              <video
                src={require("../public/star.mp4")}
                muted
                autoPlay
                loop
                playsInline
                height={480}
                width={480}
              />
            </a>
          </Link>
          <div className="flex flex-col pl-4 pb-4 md:pb-0 md:h-auto text-sm md:m-0 md:w-40 self-start md:self-center font-quantico">
            <h3 className="text-[#FFD600] text-xs">information</h3>
            <div className="text-white flex flex-col flex-grow md:flex-col space-y-2 md:space-y-2 ">
              <div className="space-x-8 md:flex md:flex-col md:space-x-0 md:space-y-2">
                <Link href="/about">
                  <a aria-label="About Page">About</a>
                </Link>
                <Link href="https://secondsight.app">
                  <a aria-label="Second Sight">Second Sight</a>
                </Link>
                <Link href="mailto:star@progress.sh">
                  <a aria-label="Email">star@progress.sh</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white flex self-start md:mb-10 md:self-center pl-4 md:pl-0  md:items-center flex-col justify-end">
          <h1 className="font-rajdhani font-light text-2xl">PROGRESS</h1>
          <h2 className="text-[#FFD600] font-rajdhani font-light text-xs md:text-sm">
            Let&apos;s all do our best.
          </h2>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [];

  const querySnapshot = await getDocs(collection(db, "journal"));
  querySnapshot.forEach((doc) => {
    const newData = { key: doc.id, ...doc.data() };
    data.push(newData);
  });

  return {
    props: { data },
  };
}
