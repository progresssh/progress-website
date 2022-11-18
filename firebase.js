import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "progress-sh-6b6d6.firebaseapp.com",
  projectId: "progress-sh-6b6d6",
  storageBucket: "progress-sh-6b6d6.appspot.com",
  messagingSenderId: "910821063090",
  appId: "1:910821063090:web:61193a8f51ed34f7794cab",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
