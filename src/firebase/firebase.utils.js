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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;