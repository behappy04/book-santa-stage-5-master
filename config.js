import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBvH2Yye6zD59RCuP3rYTbV1T4UEjliTNk",
  authDomain: "booksanta-a2610.firebaseapp.com",
  projectId: "booksanta-a2610",
  storageBucket: "booksanta-a2610.appspot.com",
  messagingSenderId: "815776167765",
  appId: "1:815776167765:web:0cd9dfc0b426d4e75861dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
