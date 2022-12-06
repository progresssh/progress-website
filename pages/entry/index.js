import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import Layout from "../../components/layout";
import PaginatedList from "../../components/paginatedItems";
import { db } from "../../firebase";

function RedirectToHome({ data }) {
  const title = "Entries";

  return (
    <Layout title={title}>
      <div className="flex h-full flex-col p-8 items-center bg-[#090909]">
        <Link href="/" className="grow h-1/4">
          <a aria-label="To Home">
            <video
              src={require("../../public/star.mp4")}
              muted
              autoPlay
              loop
              playsInline
              height={128}
              width={128}
            />
          </a>
        </Link>
        <div className=" text-white flex flex-col text-sm items-center pt-4 h-1/4 break-words w-1/2 font-quantico">
          <h2 className="text-[#FFD600] text-base">journal</h2>
          <PaginatedList data={data} items={10} />
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

export default RedirectToHome;
