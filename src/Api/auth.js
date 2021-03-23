import firebase from "firebase/app";
import "firebase/auth";
import { writeUserData } from "../database/authQueries";
import history from "../history";

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
    .then(async (result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const user = result.user;
      await writeUserData(user);
      history.push(`/profile`);
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
    .then(async (result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const user = result.user;
      await writeUserData(user);
      history.push(`/profile`);
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
    .then(async (result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const user = result.user;
      await writeUserData(user);
      history.push(`/profile`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const emailLogin = ({ email }) => {
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

  firebase
    .auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
      console.log("email enviado");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const isSignInWithEmailLink = () => {
  //**Confirm the link is a sign-in with email link*/
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    const email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    firebase
      .auth()
      .signInWithEmailLink(email, window.location.href)
      .then(async (result) => {
        console.log(`Inicio sesion con un enlace de correo electronico`);
        window.localStorage.removeItem("emailForSignIn");
        const user = result.user;
        await writeUserData(user);
        history.push(`/profile`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
