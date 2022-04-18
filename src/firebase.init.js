// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd9k5jjt0fjjls74-r91nEONxfeI9bBsI",
  authDomain: "gym-tainer.firebaseapp.com",
  projectId: "gym-tainer",
  storageBucket: "gym-tainer.appspot.com",
  messagingSenderId: "1014081793007",
  appId: "1:1014081793007:web:9100009ab9c5a6ea48e41a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;