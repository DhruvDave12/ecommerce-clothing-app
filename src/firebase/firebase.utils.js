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

// Function to create a user.
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
        return;
    }
    const firestore = firebase.firestore();
    // await firestore.collection('users').doc(userAuth.uid).set({
    //     name: userAuth.displayName,
    //     email: userAuth.email,
        
    // });
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // .get() gives us a snapshot object....
    const snapShot = await userRef.get();

    // This check prevents from creating multiple copies of a user.
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log("Error creating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;