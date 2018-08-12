import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

/*
    Firebase config and initialisation
*/
const config = {
  apiKey: 'AIzaSyBLdKlUTs_uiF2ARxJjFrjAXuPd87iZ4M4',
  authDomain: 'inv-property-manager.firebaseapp.com',
  databaseURL: 'https://inv-property-manager.firebaseio.com',
  projectId: 'inv-property-manager',
  storageBucket: 'inv-property-manager.appspot.com',
  messagingSenderId: '711194736105'
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(config);

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };
