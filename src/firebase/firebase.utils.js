import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyDBeyy6SDqqimHSEUicMSKif0Qng4N7-rg",
    authDomain: "crwon-db-394d9.firebaseapp.com",
    databaseURL: "https://crwon-db-394d9.firebaseio.com",
    projectId: "crwon-db-394d9",
    storageBucket: "crwon-db-394d9.appspot.com",
    messagingSenderId: "913132600971",
    appId: "1:913132600971:web:69f8df98123b78cfe31e8e",
    measurementId: "G-PG1H3B4CP7"
  };

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;