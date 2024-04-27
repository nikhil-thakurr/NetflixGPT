// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfHFZ6Reu8nlE8O_PgxUutdrA1xSr1tJ0",
  authDomain: "netflixgpt-cd4bd.firebaseapp.com",
  projectId: "netflixgpt-cd4bd",
  storageBucket: "netflixgpt-cd4bd.appspot.com",
  messagingSenderId: "144211944163",
  appId: "1:144211944163:web:1e558e2d4e19a6cfeb9bd6",
  measurementId: "G-TW6LW8YN95"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();