import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Card from "../../components/oasis/card";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Masonry from "react-masonry-css";
import WriteModal from "../../components/oasis/writeModal";
import Link from "next/link";

const encouragement = [
  "I'd love it if we'd make it.",
  "When you need it the most, hope is something you give to yourself.",
  "No matter where you go, everyone's connected.",
  "Beyond that unreachable, radiant horizon.",
  "You've made it this far, right?",
  "You are infinite, you can go as far as you’d like.",
  "You are your own person.",
  "You're not perfect, but you've got a lot to give. So remember, I'll always be cheering you on.",
  "If you're invisible, who will find you?",
  "You're going to be all right. You just stumbled over a stone in the road. It means nothing. Your goal lies far beyond this. Doesn't it? I'm sure you'll overcome this. You'll walk again.",
  "Because people don't have wings, we look for ways to fly.",
  "Stars only shine when they're set against the night.",
];

const randomEncouragement = () => {
  let result = encouragement[Math.floor(Math.random() * encouragement.length)];
  return result;
};

const Posts = ({ data }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const cards = data.map((post) => {
    return <Card key={post.key} post={post} />;
  });

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid "
        columnClassName="my-masonry-grid_column"
      >
        {cards}
      </Masonry>
    </div>
  );
};

const Header = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(randomEncouragement());
  }, []);

  return (
    <div className="flex flex-col justify-center m-4 ">
      <Link href="/">
        <a aria-label="Back to home">
          <h1 className="font-quantico text-xl">OASIS</h1>
        </a>
      </Link>

      <h2 className="font-quantico text-base italic">{quote}</h2>
    </div>
  );
};

export default function Oasis({ data }) {
  return (
    <div className="m-2">
      <Layout title={"Oasis"}>
        <Header />
        <WriteModal />
        <Posts data={data} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const data = [];

  const querySnapshot = await getDocs(collection(db, "oasis"));
  querySnapshot.forEach((doc) => {
    const newData = { key: doc.id, ...doc.data() };
    data.push(newData);
  });

  return {
    props: { data },
  };
}
