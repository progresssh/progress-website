import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Star from "../../components/star/starPost";

Star;

export async function getStaticPaths() {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "star"));
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
  const docRef = doc(db, "star", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();

  return { props: { ...data} };
}

export default Star;