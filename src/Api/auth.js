import firebase from "firebase/app";
import "firebase/auth";

export function sendEmailResetPassword(email) {
  //Enviar Correo
  const auth = firebase.auth();

  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      console.log("Envio el email");
    })
    .catch(function (error) {
      console.log({ error });
    });
}

export function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(`Hola User! ${result} `);
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      console.log(`${token}`);
      console.log(`${user}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

export const facebookLogin = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      const user = result.user;
      const accessToken = credential.accessToken;
      console.log(`${user}`);
      console.log(`${accessToken}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const twitterLogin = () => {
  const provider = new firebase.auth.TwitterAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(`twitter signIn ${result}  `);
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      const token = credential.accessToken;
      const secret = credential.secret;
      const user = result.user;
      console.log(`${user}`);
      console.log(`${secret}`);
      console.log(`${token}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const emailLogin = () => {
  alert("ENVIAR EL EMAIL");
  const actionCodeSettings = {
    url: "http://localhost:3000/",
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
      alert("Send Link to email");
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch((error) => {
      console.log(error);
    });
};

export function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("User signOut");
    })
    .catch((error) => {
      console.log(error);
    });
}