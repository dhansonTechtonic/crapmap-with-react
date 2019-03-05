import firebase from 'firebase'
import 'firebase/auth';

const config = {
    apiKey: "hidethisinfo!",
    authDomain: "crapmap-c5c7f.firebaseapp.com",
    databaseURL: "https://crapmap-c5c7f.firebaseio.com",
    projectId: "crapmap-c5c7f",
    storageBucket: "crapmap-c5c7f.appspot.com",
    messagingSenderId: "164189189430"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase

