import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Post from "../../components/post";

Post;

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

  return { props: { ...data, mode: 'journal' } };
}

export default Post;