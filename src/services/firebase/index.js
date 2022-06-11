// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGdZua5qXW_tRL58avivtLMVJMTfI50LA",
  authDomain: "sahoodies-ecommerce.firebaseapp.com",
  projectId: "sahoodies-ecommerce",
  storageBucket: "sahoodies-ecommerce.appspot.com",
  messagingSenderId: "37653572436",
  appId: "1:37653572436:web:5f6ea8056df01ff230f6c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db

