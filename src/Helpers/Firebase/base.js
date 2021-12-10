import { initializeApp } from "firebase/app";
// import firestore from 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyaRBh53p7gvL93ovTbY_DnN-fJLEauOg",
  authDomain: "react-reactstrap-navbar.firebaseapp.com",
  databaseURL: "https://react-reactstrap-navbar-default-rtdb.firebaseio.com",
  projectId: "react-reactstrap-navbar",
  storageBucket: "react-reactstrap-navbar.appspot.com",
  messagingSenderId: "1026755762433",
  appId: "1:1026755762433:web:5f61b84b9a41e6abf22300",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };

// const colRef  = collection(db, 'books')
