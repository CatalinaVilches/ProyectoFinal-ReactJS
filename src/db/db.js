
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" ;



const firebaseConfig = {
  apiKey: "AIzaSyBpuk39mqNasHkTYZrqJqIAnvIftAQ6sOg",
  authDomain: "ecommerce-reactjs-5efac.firebaseapp.com",
  projectId: "ecommerce-reactjs-5efac",
  storageBucket: "ecommerce-reactjs-5efac.firebasestorage.app",
  messagingSenderId: "332749662351",
  appId: "1:332749662351:web:32e91ec23f87ed753928fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore()

export default db