const admin = require('firebase-admin');
const functions = require("firebase-functions");
admin.initializeApp(functions.config().firebase, "pinsRouter");
const bodyParser = require("body-parser");
jsonParser = bodyParser.json();

let db = admin.firestore();
const express = require('express');
const router = express.Router();

router.get("/get", (request, response) =>{
    let pinsRef = db.collection('pins');
    let query = pinsRef.get().then(function(querySnapshot){
        if(querySnapshot){
            response.send(querySnapshot.docs);
        }else{
            response.send("Collection does not exist");
        }
        return false;
    }).catch (err => err)
});

router.post('/new',jsonParser, (request,response) =>{
    console.log(request.body);
    let pinObject ={
        category: request.body.category,
        img:request.body.img,
        description: request.body.description,
        location: {
            lat: request.body.lat,
            lng: request.body.lng,
            zip: request.body.zip
        },
        size: request.body.size,
        tags: request.body.tags,
        title: request.body.title,
        userID: request.body.userID
    };
    let pinsRef = db.collection('pins');
    pinsRef.add(pinObject)
    .then(() => response.send('sucdess'))
    .catch(()=> console.log('error'))
    return false
    });

router.post('/update', (request,response) =>{
    let pinObject ={
        category: request.body.category,
        img:request.img,
        description: request.body.description,
        location: {
            lat: request.body.location.lat,
            lng: request.body.location.lng,
            zip: request.body.location.zip
        },
        size: request.body.size,
        tags: request.body.tags,
        title: request.body.title,
        userID: request.body.userID
    };
    let pinsRef = db.collection('pins');
    pinsRef.set(pinObject, { merge: true })
    .then(() => console.log('success'))
    .catch(()=> console.log('error'));
    return false
});

    router.post('/delete', (request,response) =>{
        let pinObject ={
            category: request.category,
            img:request.img,
            description: request.description,
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
        let pinsRef = db.collection('pins');
        pinsRef.set(pinObject, { merge: true })
        .then(() => console.log('success'))
        .catch(()=> console.log('error'));
        return false
    });

module.exports = router;