const admin = require('firebase-admin');
const functions = require("firebase-functions");
admin.initializeApp(functions.config().firebase, "userRouter");

let db = admin.firestore();
const express = require('express');
const router = express.Router();

router.get("/get", (request, response) =>{
    console.log(request);
    let userID = request.body.id;
    let userRef = db.collection('users').doc(userID);
    let query = userRef.get().then(function(querySnapshot){
        if(querySnapshot){
            console.log(querySnapshot.docs);
            response.send(querySnapshot.docs);
        }else{
            response.send("User does not exist");
        }
        return false;
    }).catch (err => err)
});

// router.post('/new', (request,response) =>{
//     let userObject ={
//         email: request.email,
//         id: request.id,
//         password: request.password,
//         pins: request.pins,
//         settings: request.settings,
//         username: request.username
//     };
//     let usersRef = db.collection('users');
//     usersRef.add(userObject)
//     .then(() => console.log('success'))
//     .catch(()=> console.log('error'))
//     return false
// });

// router.post('/update', (request,response) =>{
//     let userObject ={
//         email: request.email,
//         password: request.password,
//         pins: request.pins,
//         settings: request.settings,
//         username: request.username
//     };
//     let userRef = db.collection('pins').doc(request.id);
//     userRef.set(userObject, { merge: true })
//     .then(() => console.log('success'))
//     .catch(()=> console.log('error'));
//     return false0
// });

//login

//logout
module.exports = router;