import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA27SGVKlD1FwvvsZeO1UJWhf6tEiRB38",
  authDomain: "campusin-565b8.firebaseapp.com",
  projectId: "campusin-565b8",
  storageBucket: "campusin-565b8.appspot.com",
  messagingSenderId: "79311361009",
  appId: "1:79311361009:web:bc6d86400036f769cb6a50"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  export {auth , provider , storage};
  export default db;