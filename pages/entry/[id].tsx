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
import Entry from "../../components/post";
import Post from "../../components/post";

Post;

export async function getStaticPaths() {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "journal"));
  querySnapshot.forEach((doc) => {
    const newData = { id: doc.id, ...doc.data(), mode: 'journal' };
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

export default Post;