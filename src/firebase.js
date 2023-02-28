import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-Q9__ux2ZJRjXSr-lElSkRX1vWZUyJKQ",
  authDomain: "gospin-fdfc7.firebaseapp.com",
  projectId: "gospin-fdfc7",
  storageBucket: "gospin-fdfc7.appspot.com",
  messagingSenderId: "684472741530",
  appId: "1:684472741530:web:5fa3c03559b4121241b923",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
