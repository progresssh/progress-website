import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/layout";
import PaginatedList from "../../components/paginatedItems";
import { db } from "../../firebase";
import { StarPost } from "../../types/starPost";
import { useEffect } from "react";
import StarCard from "../../components/star/card";
import Masonry from "react-masonry-css";

const Posts = ({ data }: { data: StarPost[] }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 1,
  };

  const shuffledArray = data.sort((a, b) => b.time - a.time);

  const cards = shuffledArray.map((post) => {
    return <StarCard key={post.key} data={post}  />;
  });

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="star-masonry-grid_column"
      >
        {cards}
      </Masonry>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col justify-center p-4 text-rose-600">
      <Link href="/" aria-label="Back to home">
        <h1 className="font-quantico text-xl">✦✧✦✧✦</h1>
      </Link>
    </div>
  );
};

export default function Star({ data }: { data: StarPost[] }) {
  return (
    <div className="h-full w-full bg-black ">
      <Layout title={"✦✧✦✧✦"}>
        <Header />
        <Posts data={data} />
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data: StarPost[] = [];

  const querySnapshot = await getDocs(collection(db, "star"));
  querySnapshot.forEach((doc) => {
    const newData = { key: doc.id, ...doc.data() } as StarPost;
    data.push(newData);
  });

  return {
    props: { data },
  };
};
