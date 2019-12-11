import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("AIgDUGNYwqXziwKpeoC3")
  .collection("cartItems")
  .doc("kAAwN8cDK7lAHKn7MMHI");

firestore.doc("/users/AIgDUGNYwqXziwKpeoC3/cartItems/kAAwN8cDK7lAHKn7MMHI");
firestore.collection("/users/AIgDUGNYwqXziwKpeoC3/cartItems");
