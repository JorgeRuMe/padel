import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBoI31DjL7RqD2dC7-Vuh0SyJpOdnQoKjU",
  authDomain: "padel-e8f15.firebaseapp.com",
  projectId: "padel-e8f15",
  storageBucket: "padel-e8f15.appspot.com",
  messagingSenderId: "534259991223",
  appId: "1:534259991223:web:609c360e5673f9beda8332",
  measurementId: "G-HPKXJE84DS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const db = firebase.firestore()
