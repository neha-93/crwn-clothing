import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
apiKey: "AIzaSyBnXAwAE9XHT5EqqHxPYbtIdDvoNqzsUgw",
authDomain: "crwn-db-723a5.firebaseapp.com",
projectId: "crwn-db-723a5",
storageBucket: "crwn-db-723a5.appspot.com",
messagingSenderId: "921756691075",
appId: "1:921756691075:web:97e83d17cc0a4c6da989b6",
measurementId: "G-3TXK6G5EXQ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
