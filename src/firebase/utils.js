import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAvFJRWt6_thYv_7zzE-7aG61TBXbGKE_4",
  authDomain: "crwn-db-e1b8c.firebaseapp.com",
  databaseURL: "https://crwn-db-e1b8c.firebaseio.com",
  projectId: "crwn-db-e1b8c",
  storageBucket: "crwn-db-e1b8c.appspot.com",
  messagingSenderId: "147020695275",
  appId: "1:147020695275:web:d7e0f833e397277dfea0ae",
  measurementId: "G-06WGHBKHTZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
