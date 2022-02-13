import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDNLL5jnM6ke_BYazyogxb5ZmY-0Fx2VlA",
    authDomain: "ecommerce-clothing-db-31295.firebaseapp.com",
    projectId: "ecommerce-clothing-db-31295",
    storageBucket: "ecommerce-clothing-db-31295.appspot.com",
    messagingSenderId: "1007265875769",
    appId: "1:1007265875769:web:f9c108b53da36a4366cae8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;