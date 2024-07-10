// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzSmJuZxy1kvQJSj8_Y8nqS6lo8kQ084w",
  authDomain: "auth-8541b.firebaseapp.com",
  projectId: "auth-8541b",
  storageBucket: "auth-8541b.appspot.com",
  messagingSenderId: "744786592612",
  appId: "1:744786592612:web:90a44fe4c197e6a9c67071",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
