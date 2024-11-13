// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXMzBRkbvnQxp9lnJhAg6yyI8qRg2phoY",
  authDomain: "netflix-gpt-78641.firebaseapp.com",
  projectId: "netflix-gpt-78641",
  storageBucket: "netflix-gpt-78641.firebasestorage.app",
  messagingSenderId: "182839347563",
  appId: "1:182839347563:web:d78d7757b53d45483e242e",
  measurementId: "G-8QF3KNLR2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();