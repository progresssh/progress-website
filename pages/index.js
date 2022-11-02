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
        <div className="flex flex-col  h-full mb-4 md:flex-row md:justify-evenly justify-center items-center  ">
          <div className="w-11/12 text-white flex flex-col  text-sm md:w-40 h-1/4  md:m-0 self-center break-words justify-center  font-quantico ">
            <h2 className="text-[#FFD600] text-xs">journal</h2>
            <PaginatedList data={data} />
          </div>
          <Link href="/oasis" className="grow h-1/4 p-8 ">
            <a aria-label="To Oasis">
              <video
                alt="Video of a star as a link, to the Oasis page."
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
          <div className="flex flex-col pl-4 mb-4 md:h-auto text-sm md:m-0 md:w-40 self-start md:self-center font-quantico">
            <h3 className="text-[#FFD600] text-xs">information</h3>
            <div className="text-white flex flex-col space-y-3 md:space-y-2 ">
              <Link href="/about">
                <a aria-label="About Page">About</a>
              </Link>
              <Link href="https://twitter.com/progress_sh_">
                <a target="_blank" aria-label="Twitter">
                  Twitter
                </a>
              </Link>
              <Link href="https://progresssh.substack.com/">
                <a target="_blank" aria-label="Newsletter">
                  Newsletter
                </a>
              </Link>
              <Link href="https://twitch.tv/progress_sh">
                <a target="_blank" aria-label="Twitch">
                  Twitch
                </a>
              </Link>
              <Link href="mailto:star@progress.sh">
                <a aria-label="Email">star@progress.sh</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-white flex self-start md:mb-10 md:self-center pl-4 md:pl-0  md:items-center flex-col justify-end">
          <h1 className="font-rajdhani font-light text-2xl">PROGRESS</h1>
          <h2 className="text-[#FFD600] font-rajdhani font-light text-sm">
            forward or onward movement towards a destination
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
