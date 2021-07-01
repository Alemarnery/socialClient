import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import "firebase/auth";
import { isSignInWithEmailLink } from "./Api/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyCU5HUy_lBrNbTGL0Mpbm9py-5qrb8PU",
  authDomain: "social-alemar95.firebaseapp.com",
  databaseURL: "https://social-alemar95-default-rtdb.firebaseio.com/",
  projectId: "social-alemar95",
  storageBucket: "social-alemar95.appspot.com",
  messagingSenderId: "1072738244794",
  appId: "1:1072738244794:web:12669a19d8c2310206ca83",
  measurementId: "G-L4SZ6FHG5T",
};

//Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    alert("user is sing");
  } else {
    alert("No user is signed in");
  }
});

isSignInWithEmailLink();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
