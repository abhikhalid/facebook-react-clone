import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDTkxBfVxKxDp2zKxLmAYeCe010w6Uutps",
    authDomain: "facebook-react-clone-c2cfc.firebaseapp.com",
    projectId: "facebook-react-clone-c2cfc",
    storageBucket: "facebook-react-clone-c2cfc.appspot.com",
    messagingSenderId: "877961940160",
    appId: "1:877961940160:web:6bf67210a31aba63e9f125"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };