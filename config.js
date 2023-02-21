import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCkE88OYPw4zNPq9AgzuTUchN98Q793H4U",
  authDomain: "biblioteca71zap.firebaseapp.com",
  projectId: "biblioteca71zap",
  storageBucket: "biblioteca71zap.appspot.com",
  messagingSenderId: "483932626212",
  appId: "1:483932626212:web:b4ecb6cc9458a1166827b1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
