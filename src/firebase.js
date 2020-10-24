import firebase from 'firebase';
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVdqb2t--eR8s0Wr2iiLHl1in8wBH2gyg",
    authDomain: "myblog-7799.firebaseapp.com",
    databaseURL: "https://myblog-7799.firebaseio.com",
    projectId: "myblog-7799",
    storageBucket: "myblog-7799.appspot.com",
    messagingSenderId: "303907217917",
    appId: "1:303907217917:web:abde58047b17ccfe56f994",
    measurementId: "G-2VKJDEW0VD"
  })

  const db = firebaseApp.firestore()

  export default db;