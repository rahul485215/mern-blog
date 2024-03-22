// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f708c.firebaseapp.com",
  projectId: "mern-blog-f708c",
  storageBucket: "mern-blog-f708c.appspot.com",
  messagingSenderId: "999661217622",
  appId: "1:999661217622:web:ab7dc1748cb84ca4e718f7"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);