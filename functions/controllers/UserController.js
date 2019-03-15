const admin = require('firebase-admin');
const functions = require("firebase-functions");
const bodyParser = require("body-parser");
admin.initializeApp(functions.config().firebase, "userRouter");

let db = admin.firestore();
const express = require('express');
const router = express.Router();
jsonParser = bodyParser.json();

router.get("/get/:userID", (request, response) =>{
    console.log("request Info , ", request.body);
    let userID = request.params.userID;
    console.log("userID, " , userID);
    let userRef = db.collection('users').doc(userID);
    let query = userRef.get().then(function(doc){
        if(doc.exists){
            console.log('User document data:', doc.data());
            response.send(doc.data());
        }else{
            response.send("User does not exist");
        }
        return false;
    }).catch (err => err)
});

router.post('/new', jsonParser, (request,response) =>{
    let userObject ={
        email: request.body.email,
        password: request.body.password,
        pins: request.body.pins,
        settings: request.body.settings,
        username: request.body.username
    };
    let usersRef = db.collection('users');
    usersRef.add(userObject)
    .then(() => console.log('success'))
    .catch(()=> console.log('error'))
    return false
});

router.patch('/update/:userID', jsonParser, (request,response) =>{
    let userID = request.params.userID;
    let userObject ={
        email: request.body.email,
        password: request.body.password,
        pins: request.body.pins,
        settings: request.body.settings,
        username: request.body.username
    };
    console.log(userObject);
    let userRef = db.collection('users').doc(userID);
    userRef.set(userObject, { merge: true })
    .then(() => console.log('success'))
    .catch(()=> console.log('error'));
    return false
});

//login

//logout
module.exports = router;