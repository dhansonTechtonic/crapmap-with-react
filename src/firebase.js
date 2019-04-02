import firebase from 'firebase'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC53O0DxwSAbAgEQTcj3eVwpuIPad3LqpQ",
    authDomain: "crapmap-c5c7f.firebaseapp.com",
    databaseURL: "https://crapmap-c5c7f.firebaseio.com",
    projectId: "crapmap-c5c7f",
    storageBucket: "crapmap-c5c7f.appspot.com",
    messagingSenderId: "164189189430"
};


firebase.initializeApp(config);

export const deleteUser = () => {
    let user = firebase.auth().currentUser;
    user.delete().then(function() {
        console.log('user deleted', user)
        // deletePins action creator of userID
    }).catch(function(error){
        console.log('user not deleted', error)
    })
}

export const getFirebaseUser = () => {
    let user = firebase.auth().currentUser
    return user;
}



export const auth = firebase.auth();
export default firebase

