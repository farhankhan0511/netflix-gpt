// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQGeZPQCKxPFw_G6Z_lWgkZ1Ul9c1T-so",
  authDomain: "netflixgpt-63ce7.firebaseapp.com",
  projectId: "netflixgpt-63ce7",
  storageBucket: "netflixgpt-63ce7.firebasestorage.app",
  messagingSenderId: "1021722501594",
  appId: "1:1021722501594:web:05a08ddb16d29ee80c20e3",
  measurementId: "G-4C84PZNMFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();