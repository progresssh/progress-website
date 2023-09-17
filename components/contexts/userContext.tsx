import { getUnixTime } from "date-fns";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
  createContext,
  ErrorInfo,
  useContext,
  useEffect,
  useState,
} from "react";
import app, { db } from "../../firebase";
import { AuthInterface } from "../../types/auth";
import { JSONContent } from "@tiptap/core";

const AuthContext = createContext<AuthInterface | null>(null);
const auth = getAuth(app);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [isProgress, setIsProgress] = useState(false);

  const postDocument = async (
    post: JSONContent,
    type: "transmissions" | "journal"
  ) => {
    try {
      if (
        post.content[0].type !== "heading" &&
        post.content[0].attrs.level !== 1 &&
        type === "journal"
      ) {
        throw new Error();
      }

      const title = post.content.shift().content[0].text;
      const body = post;

      const date = new Date();
      const time = getUnixTime(date);

      for (let index = 1; index < post.length; index++) {
        body.push(post[index].children[0].text);
      }

      const replaceDataSpaces = title.replace(/\s/g, "-");
      const processedData = replaceDataSpaces.replace(/[^a-zA-Z0-9-]/g, "");

      const data = {
        key: processedData,
        title: title,
        body: body,
        time: time,
      };

      await setDoc(doc(db, type, data.key), data);

      console.log(
        type === "transmissions"
          ? "Transmission received."
          : "A new page for the journal."
      );
    } catch (e) {
      console.error("Error adding document: ", e.message);
    }
  };

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      if (user === null) {
        setIsProgress(false);
      } else {
        setIsProgress(user.uid === process.env.NEXT_PUBLIC_PROGRESS_UID);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        auth,
        signIn,
        postDocument,
        isProgress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
