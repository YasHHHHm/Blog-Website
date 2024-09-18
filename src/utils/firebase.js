// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bloghub-ad932.firebaseapp.com",
  projectId: "bloghub-ad932",
  storageBucket: "bloghub-ad932.appspot.com",
  messagingSenderId: "112529893998",
  appId: "1:112529893998:web:6ca81580061e170050d47f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);