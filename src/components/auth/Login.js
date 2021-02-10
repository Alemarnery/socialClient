import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

const Login = () => {
  function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(`Hola User! ${result} `);
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const emailLogin = () => {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: "http://localhost:3000/",
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: "http://localhost:3000/",
      },
      android: {
        packageName: "http://localhost:3000/",
        installApp: true,
        minimumVersion: "12",
      },
      dynamicLinkDomain: "socialAlem.page.link",
    };

    const email = "aleemar.95@gmail.com";

    firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        alert("Send Link to email");
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <button id="googleLogin" onClick={googleLogin}>
        Google
      </button>

      <button id="emailLinkLogin" onClick={emailLogin}>
        Email Link
      </button>

      <button id="facebookLogin">Facebook</button>

      <button id="twitterLogin">Twitter</button>

      <button onClick={signOut}>signOut</button>
    </div>
  );
};

export default Login;
