import * as firebase from 'firebase'
import "firebase/auth"
require('firebase/firestore')

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDnFufUH5_LxOdFL4pbXD0hVW7HtfT8lsI",
    authDomain: "instaclone-32289.firebaseapp.com",
    projectId: "instaclone-32289",
    storageBucket: "instaclone-32289.appspot.com",
    messagingSenderId: "653186827390",
    appId: "1:653186827390:web:c23aba251f9ddda582042f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default db