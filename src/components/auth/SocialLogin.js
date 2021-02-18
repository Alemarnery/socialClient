import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

const SocialLogin = () => {
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

  const facebookLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(`userLogin from facebook!!!`);
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const accessToken = credential.accessToken;
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const twitterLogin = () => {
    const provider = new firebase.auth.TwitterAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(`twitter signIn ${result}  `);
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        const token = credential.accessToken;
        const secret = credential.secret;

        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
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
    <div className="field center aligned">
      <button className="ui negative basic button" onClick={googleLogin}>
        <i className="google  icon"></i>
        Google
      </button>

      <button className="ui secondary basic button" onClick={emailLogin}>
        <i className="envelope outline icon"></i>
        Email Link
      </button>

      <button className="ui facebook button" onClick={facebookLogin}>
        <i className="facebook icon"></i>
        Facebook
      </button>

      <button className="ui twitter button" onClick={twitterLogin}>
        <i className="facebook icon"></i>
        Twitter
      </button>

      <button onClick={signOut}>signOut</button>
    </div>
  );
};

export default SocialLogin;
