import { getUnixTime } from "date-fns";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import app, { db } from "../../firebase";
import { AuthInterface } from "../../types/auth";

const AuthContext = createContext<AuthInterface | null>(null);
const auth = getAuth(app);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [isProgress, setIsProgress] = useState(false);

  const postDocument = async (post) => {
    const title = post[0].children[0].text;
    const content = [];

    const date = new Date();
    const time = getUnixTime(date);

    for (let index = 1; index < post.length; index++) {
      content.push(post[index].children[0].text);
    }

    const replaceDataSpaces = title.replace(/\s/g, "-");
    const processedData = replaceDataSpaces.replace(/[^a-zA-Z0-9-]/g, "");

    const data = {
      key: processedData,
      title: title,
      content: content,
      time: time,
    };

    try {
      await setDoc(doc(db, "journal", data.key), data);
    } catch (e) {
      console.error("Error adding document:", e);
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
