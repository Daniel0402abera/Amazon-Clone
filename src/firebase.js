// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS4kQnCnpV_HWgTdLYgZN41PkSjl1sA2s",
  authDomain: "clone-1e0b0.firebaseapp.com",
  projectId: "clone-1e0b0",
  storageBucket: "clone-1e0b0.appspot.com",
  messagingSenderId: "48605803175",
  appId: "1:48605803175:web:f26f7553efce710dc02182",
  measurementId: "G-DHQWG9Q01G",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { db, auth };



// const analytics = getAnalytics(app);
