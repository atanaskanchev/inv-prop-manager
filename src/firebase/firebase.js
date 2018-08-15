import firebase from 'firebase';
import 'firebase/auth/dist/index.cjs';
import 'firebase/database/dist/index.cjs';

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

const realTimeDB = firebase.database();
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
const auth = firebase.auth();

export { auth, realTimeDB, firestore };
