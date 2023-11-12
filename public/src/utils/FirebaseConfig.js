// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnCC4tnIaRckGNAn3qzv-IdMHFYEVp_ek",
  authDomain: "mernchat-70783.firebaseapp.com",
  projectId: "mernchat-70783",
  storageBucket: "mernchat-70783.appspot.com",
  messagingSenderId: "706396081618",
  appId: "1:706396081618:web:861eb63c5ac97f8e890c0b",
  measurementId: "G-9ZTY3036H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);