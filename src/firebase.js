import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-Q9__ux2ZJRjXSr-lElSkRX1vWZUyJKQ",
  authDomain: "gospin-fdfc7.firebaseapp.com",
  projectId: "gospin-fdfc7",
  storageBucket: "gospin-fdfc7.appspot.com",
  messagingSenderId: "684472741530",
  appId: "1:684472741530:web:5fa3c03559b4121241b923",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
