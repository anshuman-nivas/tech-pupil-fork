// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdzXeoszpCXIwjuNOHRMDgDoq1G__oYkI",
  authDomain: "portfolio-86644.firebaseapp.com",
  projectId: "portfolio-86644",
  storageBucket: "portfolio-86644.appspot.com",
  messagingSenderId: "35531224735",
  appId: "1:35531224735:web:34031c001e2d905ef694aa",
  measurementId: "G-4T5QR5NNR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);