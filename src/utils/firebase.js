// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACRfC7UXxoS3w6nzOCPKyA7rQkCU9vtdY",
  authDomain: "netflixgpt-fe2bb.firebaseapp.com",
  projectId: "netflixgpt-fe2bb",
  storageBucket: "netflixgpt-fe2bb.appspot.com",
  messagingSenderId: "103897441792",
  appId: "1:103897441792:web:ec45a78bfc873e6bb85ae5",
  measurementId: "G-XNE6DYQT77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();