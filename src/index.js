 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI9PRVQ8wcqsmZCSS7BNPxXRALF49OAl8",
  authDomain: "gettingstartedwithfireba-29bcf.firebaseapp.com",
  projectId: "gettingstartedwithfireba-29bcf",
  storageBucket: "gettingstartedwithfireba-29bcf.appspot.com",
  messagingSenderId: "901730842827",
  appId: "1:901730842827:web:5ace4bf6e7d4987a7f434e",
  measurementId: "G-VB9VZHK4RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);