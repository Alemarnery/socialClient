import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import { zeroBeforeNumber } from "../utilities";

//BORRAR ESTE METODO
export function writeUserData(userData) {
  const { uid, email, phoneNumber, photoURL, displayName } = userData;
  firebase
    .database()
    .ref("users/" + uid)
    .set({
      email,
      phoneNumber,
      photoURL,
      displayName,
    });
}

export async function createUser(data) {
  const { email, password, birthDay, lastName, name } = data;
  // Irosshi -
  // This will return the following object:
  //   { seconds: XXX, nanoseconds: YYY }
  // This object has the method .toDate to convert
  // a Firebase Timestamp to a JavaScript Date object.
  const firebaseDate = firebase.firestore.Timestamp.fromDate(birthDay);

  const userRegister = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;
      const { uid } = user;

      firebase
        .database()
        .ref("users/" + uid)
        .set({
          email,
          password,
          lastName,
          name,
          birthDay: firebaseDate,
        });

      firebase.auth().signOut();
      return "User has created";
    })
    .catch((error) => {
      return error;
    });
  return userRegister;
}

export async function authUser() {
  const userId = firebase.auth().currentUser.uid;
  const data = await firebase
    .database()
    .ref("users/" + userId)
    .get()
    .then(function (user) {
      return user.val();
    })
    .catch(function (error) {
      return error;
    });

  const { birthDay, email, lastName, name, password, image } = data;

  const storeRef = firebase.storage().ref();
  const imageURL = await storeRef
    .child(`userImage/${userId}/${image}`)
    .getDownloadURL()
    .then(function (url) {
      return url;
    })
    .catch(function (error) {
      return error;
    });

  const fullDate = new Date(birthDay.seconds * 1000); //Milisecons

  //GETMONTH
  //returns the month (from 0 to 11) for the specified date
  const date = `${fullDate.getFullYear()}-${zeroBeforeNumber(
    fullDate.getMonth() + 1
  )}-${zeroBeforeNumber(fullDate.getDate())}`;

  const userData = {
    email,
    lastName,
    name,
    password,
    birthDay: date,
    imageURL,
  };

  return userData;
}

//Update User
export const updateUser = async (data) => {
  const { birthDay, email, image, lastName, name, password } = data;
  const [firstImage] = image;

  const userId = firebase.auth().currentUser.uid;

  const imageName = firstImage.name;
  firebase
    .storage()
    .ref()
    .child(`userImage/${userId}/${imageName}`)
    .put(firstImage);

  const firebaseDate = firebase.firestore.Timestamp.fromDate(birthDay);

  return await firebase
    .database()
    .ref("users/" + userId)
    .update({
      name,
      password,
      lastName,
      birthDay: firebaseDate,
      email,
      image: imageName,
    });
};
