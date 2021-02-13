import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var API_KEY = process.env.REACT_APP_FB_KEY

const config = {
  apiKey: API_KEY,
  authDomain: "fir-crwn-db-29888.firebaseapp.com",
  projectId: "fir-crwn-db-29888",
  storageBucket: "fir-crwn-db-29888.appspot.com",
  messagingSenderId: "1000835437552",
  appId: "1:1000835437552:web:0f08f48cc25b07ee0b4335",
  measurementId: "G-G25GHBBPXX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;