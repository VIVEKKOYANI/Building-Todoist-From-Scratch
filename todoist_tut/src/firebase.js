import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB0g__Vgc1zIufiC-gu3cK0KBDuP3CZDKs",
    authDomain: "todoist-tut-11cc2.firebaseapp.com",
    databaseURL: "https://todoist-tut-11cc2.firebaseio.com",
    projectId: "todoist-tut-11cc2",
    storageBucket: "todoist-tut-11cc2.appspot.com",
    messagingSenderId: "452786679259",
    appId: "1:452786679259:web:cc7fc013ba28a2181ccbfe",
    measurementId: "G-MXK7VNZ7FW"
});

export {firebaseConfig as firebase};