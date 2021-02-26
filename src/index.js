import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import "firebase/auth";

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

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("user is sing");
  } else {
    console.log("No user is signed in");
  }
});

//**Confirm the link is a sign-in with email link*/
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  const email = window.localStorage.getItem("emailForSignIn");
  if (!email) {
    email = window.prompt("Please provide your email for confirmation");
  }
  firebase
    .auth()
    .signInWithEmailLink(email, window.location.href)
    .then((result) => {
      window.localStorage.removeItem("emailForSignIn");
    })
    .catch((error) => {
      console.log(error);
    });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
