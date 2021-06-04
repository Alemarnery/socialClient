import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

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
  const { email, password } = data;

  const userRegister = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;
      const { uid } = user;

      firebase
        .database()
        .ref("users/" + uid)
        .set(data);

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
  const user = await firebase
    .database()
    .ref("users/" + userId)
    .get()
    .then(function (user) {
      return user.val();
    })
    .catch(function (error) {
      return error;
    });

  return user;
}

//Revisar upload image
export const updateUser = (data) => {
  const { birthDay, email, image, lastName, name, password } = data;
  const [firstImage] = image;

  const userId = firebase.auth().currentUser.uid;
  const imageName = firstImage.name;

  // Create a root reference
  const storageRef = firebase.storage().ref();

  // Upload File
  const imageRef = storageRef.child(`userImage/${userId}/${imageName}`);
  imageRef.put(firstImage).then(function (snapshot) {
    console.log("Uploaded a file!");
  });
};
