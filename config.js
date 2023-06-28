import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAEAfBYvo6fVqM0h0nHyPXGK2-T9v6pzWY",
    authDomain: "e-ride-8c99b.firebaseapp.com",
    projectId: "e-ride-8c99b",
    storageBucket: "e-ride-8c99b.appspot.com",
    messagingSenderId: "744094380814",
    appId: "1:744094380814:web:cd55d1cbf6291bb8f7dd5f"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
