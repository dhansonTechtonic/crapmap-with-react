const admin = require('firebase-admin');
const functions = require("firebase-functions");
admin.initializeApp(functions.config().firebase, "pinsRouter");

let db = admin.firestore();
const express = require('express');
const router = express.Router();

router.get("/user", (request, response) =>{

    let itemsRef = db.collection('users');
    let query = usersRef.get().then(function(querySnapshot){
        if(querySnapshot){
            console.log(querySnapshot.docs);
            response.send(querySnapshot.docs);
        }else{
            response.send("Collection does not exist");
        }
        return false;
    }).catch (err => err)
});

router.post('/addUser', (request,response) =>{
    let userObject ={
        category: request.category,
        img:request.img,
        location: {
            lat: request.location.lat,
            lng: request.location.lng,
            zip: request.location.zip
        },
        size: request.size,
        tags: request.tags,
        title: request.title,
        userID: request.userID
    };
    let usersRef = db.collection('users');
    usersRef.add(posting)
    .then(() => console.log('success'))
    .catch(()=> console.log('error'))
    return false
    });

router.post('/editUser', (request,response) =>{
    let posting ={
        category: request.category,
        img:request.img,
        location: {
            lat: request.location.lat,
            lng: request.location.lng,
            zip: request.location.zip
        },
        size: request.size,
        tags: request.tags,
        title: request.title,
        userID: request.userID
    };
    let itemsRef = db.collection('pins');
    itemsRef.set(posting, { merge: true })
    .then(() => console.log('success'))
    .catch(()=> console.log('error'));
    return false
    });

module.exports = router;