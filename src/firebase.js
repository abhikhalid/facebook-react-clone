import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDkLs11nJEsKS69RNuCgrFSng7hnQgkWlI",
    authDomain: "react-clone-62981.firebaseapp.com",
    projectId: "react-clone-62981",
    storageBucket: "react-clone-62981.appspot.com",
    messagingSenderId: "276768378322",
    appId: "1:276768378322:web:98385c2647acc12ac18c0b"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };