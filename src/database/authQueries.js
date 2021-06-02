import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

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

  const userId = firebase.auth().currentUser.uid;
  const imageName = image[0].name;

  // Create a root reference
  const storageRef = firebase.storage().ref();
  // Upload the file and metadata
  const uploadImage = storageRef
    .child(`userImage/${userId}/${imageName}`)
    .put(imageName); // Creo que el put no deberia ir aqui

  uploadImage.on("state_changed", console.log, console.error, () => {
    firebase
      .storage()
      .ref(`userImage/${userId}`)
      .child(`${imageName}`)
      .getDownloadURL()
      .then((url) => {
        //Esta url debo devolverla, para cambiar la imagen en la vista
        console.log(url);
      });
  });
};
