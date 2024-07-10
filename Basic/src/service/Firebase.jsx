  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getAuth } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAugzRToQr7jmTsqcg-d95bT9Rlm86kw8Q",
    authDomain: "auth-81557.firebaseapp.com",
    projectId: "auth-81557",
    storageBucket: "auth-81557.appspot.com",
    messagingSenderId: "885809240690",
    appId: "1:885809240690:web:d5fd8a1adf7d8e93ed40eb",
    measurementId: "G-XXG3JMWR4F",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  // eslint-disable-next-line no-unused-vars
  const analytics = getAnalytics(app);
