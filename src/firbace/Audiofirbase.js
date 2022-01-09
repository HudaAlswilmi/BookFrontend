
  import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-EsRivYdVqj5eMZNwbffkUKIL7FhKoK8",
  authDomain: "audio-library-87a66.firebaseapp.com", 
  projectId: "audio-library-87a66",
  storageBucket: "audio-library-87a66.appspot.com",
  messagingSenderId: "208921754344",
  appId: "1:208921754344:web:501ee43e365fd15147275d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };