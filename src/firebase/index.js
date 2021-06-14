import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyALR7xWOCUI13fVBL5jPKIjAcNUgoYK4X4",
  authDomain: "react-todo-ae03b.firebaseapp.com",
  projectId: "react-todo-ae03b",
  storageBucket: "react-todo-ae03b.appspot.com",
  messagingSenderId: "815028021209",
  appId: "1:815028021209:web:a3a74c326a61fa786b9bc8",
  measurementId: "G-ZTQHMQJQZB",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const Auth = firebase.auth();
