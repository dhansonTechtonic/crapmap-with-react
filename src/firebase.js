import firebase from 'firebase'



const config = {
    apiKey: "AIzaSyBEwkZA6H4VSAsQFiWAxo5x8jl78fWYCQs",
    authDomain: "crapmap-4ab91.firebaseapp.com",
    databaseURL: "https://crapmap-4ab91.firebaseio.com",
    projectId: "crapmap-4ab91",
    storageBucket: "crapmap-4ab91.appspot.com",
    messagingSenderId: "942646979397"
};
firebase.initializeApp(config);

export default firebase
