// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLinguLfrjW-kA82rCO5xaVdCNe5wYIhc",
  authDomain: "netflix-gpt-9b4bb.firebaseapp.com",
  projectId: "netflix-gpt-9b4bb",
  storageBucket: "netflix-gpt-9b4bb.firebasestorage.app",
  messagingSenderId: "907102025177",
  appId: "1:907102025177:web:fd53b2f85d02afa5d655c8",
  measurementId: "G-RB72BFNDE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();