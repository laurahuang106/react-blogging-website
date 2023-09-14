// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGyiupP3Jf2uTSfFcwEAIHtSUqBH6fMr0",
  authDomain: "react-project-43a56.firebaseapp.com",
  projectId: "react-project-43a56",
  storageBucket: "react-project-43a56.appspot.com",
  messagingSenderId: "1077674696463",
  appId: "1:1077674696463:web:d656444ac82274d9cfa87a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
