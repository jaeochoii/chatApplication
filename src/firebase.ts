// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCl3mRSZmgQl2JYeqCSGIzAdkFTISX6Yd4",
  authDomain: "twitter-d6183.firebaseapp.com",
  projectId: "twitter-d6183",
  storageBucket: "twitter-d6183.appspot.com",
  messagingSenderId: "468462217088",
  appId: "1:468462217088:web:e0a90e359cc9a9f70e0365",
  measurementId: "G-KFHD5F1F15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
