// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPZfgnYFqaoy_8nEQzUr5tzSLQFrQWbHA",
  authDomain: "react-firebase-app-4593.firebaseapp.com",
  projectId: "react-firebase-app-4593",
  storageBucket: "react-firebase-app-4593.appspot.com",
  messagingSenderId: "243799808358",
  appId: "1:243799808358:web:71387ce363c5d5a4d6d0a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);