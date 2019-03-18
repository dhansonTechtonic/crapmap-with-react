import firebase from 'firebase'
import 'firebase/auth';

const config = {
<<<<<<< HEAD
    apiKey: "AIzaSyC53O0DxwSAbAgEQTcj3eVwpuIPad3LqpQ!",
=======
    apiKey: "AIzaSyC53O0DxwSAbAgEQTcj3eVwpuIPad3LqpQ",
>>>>>>> cac1e01fa89bcff1cc64b290e5fd7a0654397716
    authDomain: "crapmap-c5c7f.firebaseapp.com",
    databaseURL: "https://crapmap-c5c7f.firebaseio.com",
    projectId: "crapmap-c5c7f",
    storageBucket: "crapmap-c5c7f.appspot.com",
    messagingSenderId: "164189189430"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase

