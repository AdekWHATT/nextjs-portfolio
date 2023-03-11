import '/styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import '/styles/media.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdSTcaKZmlaMnAJ87PnQpTgJrNfDD7FZk",
  authDomain: "portfolio-50eb7.firebaseapp.com",
  projectId: "portfolio-50eb7",
  storageBucket: "portfolio-50eb7.appspot.com",
  messagingSenderId: "380056133048",
  appId: "1:380056133048:web:72e0ec5ac9c7360fe4434d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);