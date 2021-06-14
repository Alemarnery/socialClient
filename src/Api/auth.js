import firebase from "firebase/app";
import "firebase/auth";
import history from "../history";

async function userCreated() {
  history.push(`/usuarioAutenticado`);
  alert("Usuario Creado con RED SOCIAL y autenticado con exito");
}

export const signInWithEmailAndPassword = ({ email, password }) => {
  const signInResponse = firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      history.push(`/profile`);
      return "bien";
    })
    .catch((error) => {
      return error;
    });

  return signInResponse;
};

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
      userCreated();
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
      userCreated();
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
      userCreated();
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
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    const email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }
    firebase
      .auth()
      .signInWithEmailLink(email, window.location.href)
      .then(async (result) => {
        window.localStorage.removeItem("emailForSignIn");
        userCreated();
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
