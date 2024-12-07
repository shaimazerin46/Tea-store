// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK26i5k79yNlWVyuCx8_7b2iGW7o04jU0",
  authDomain: "tea-store-f0a6d.firebaseapp.com",
  projectId: "tea-store-f0a6d",
  storageBucket: "tea-store-f0a6d.firebasestorage.app",
  messagingSenderId: "864329774479",
  appId: "1:864329774479:web:dbe6eca0604cee4055c7fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);