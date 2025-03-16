// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrIdmOtltCXaLzBUnK8wqnHaJBikihoUs",
  authDomain: "netflixgpt-52771.firebaseapp.com",
  projectId: "netflixgpt-52771",
  storageBucket: "netflixgpt-52771.firebasestorage.app",
  messagingSenderId: "36775662194",
  appId: "1:36775662194:web:d34805608d90e06ca5a8eb",
  measurementId: "G-6783QCD5Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();