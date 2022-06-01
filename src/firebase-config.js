import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC3q_cMHVBaT9L-xooCX7FkeVuJ0SFlC_0",
    authDomain: "shop-2bd40.firebaseapp.com",
    projectId: "shop-2bd40",
    storageBucket: "shop-2bd40.appspot.com",
    messagingSenderId: "9285947367",
    appId: "1:9285947367:web:a341cb6dae33b32ae37742"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
