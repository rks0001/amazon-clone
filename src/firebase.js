import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzX2u8Ng1q3xFsgIJWKE11-jv2ZLHa6dM",
    authDomain: "clone-2049f.firebaseapp.com",
    projectId: "clone-2049f",
    storageBucket: "clone-2049f.appspot.com",
    messagingSenderId: "370472532270",
    appId: "1:370472532270:web:1ab3c08f5a0a13d0d462bf",
    measurementId: "G-5TJQL9Z6J0"
  });

  const db = firebase.firestore();

  export{db}