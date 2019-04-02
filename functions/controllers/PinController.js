const admin = require('firebase-admin');
const functions = require("firebase-functions");
admin.initializeApp(functions.config().firebase, "pinsRouter");
const bodyParser = require("body-parser");
jsonParser = bodyParser.json();

let db = admin.firestore();
const express = require('express');
const router = express.Router();

router.get("/get/category/:category", (req, res) => {
    console.log('pin/get/category');
    let pinsRef = db.collection('pins');
    var query = pinsRef.where("category", "==", req.params.category).get()
    .then(function(querySnapshot){
        if (querySnapshot) {
            res.send(querySnapshot.docs);
        } else {
            res.send("Collection does not exist");
        }
        return false;
    }).catch(err => console.log(err));
})

router.get("/get/:userID", (req, res) => {
    console.log('pin/get/user');
    let pinsRef = db.collection('pins');
    var query = pinsRef.where("userID", '==', req.params.userID).get()
    .then(function(querySnapshot){
      if (querySnapshot) {
          res.send(querySnapshot.docs);
      } else {
          res.send("Collection does not exist");
      }
      return false;
    }).catch(err => console.log(err))
})


router.get("/get", (request, response) =>{
    console.log('pin/get');
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
    console.log('pin/new');
    let pinObject ={
        category: request.body.category,
        location: {
            lat: request.body.lat,
            lng: request.body.lng,
            address: request.body.address
        },
        size: request.body.size,
        title: request.body.title,
        userID: request.body.userID
    };

    for(key in pinObject){
        if(!key){
            response.send("Posting was incomplete")
            return false;
        }
    }

    if(request.body.img){
        pinObject.img = request.body.img;
    }else{
        pinObject.img = 'assets/crapmapLogoWhite.png';
    }

    let pinsRef = db.collection('pins');
    pinsRef.add(pinObject)
    .then(() => response.send('success'))
    .catch(()=> console.log('error'))
    return false
}); 

router.post('/update/:pinID', (request,response) =>{
    console.log('pin/update/pin');
    let pinObject ={
        category: request.body.category,
        location: {
            lat: request.body.lat,
            lng: request.body.lng,
            address: request.body.address
        },
        size: request.body.size,
        title: request.body.title,
        
    };

    if(request.body.img){
        pingObject[img] = request.body.img;
    }

    for(key in pinObject){
        if(!key){
            response.send("Posting was incomplete")
            return false;
        }
    }

    let pinsRef = db.collection('pins').doc(request.params.pinID);
    let getRef = pinsRef.get().then( doc => {
            if(doc.exists){
                pinsRef.set(pinObject, { merge: true })
                .then(() => response.send('success'))
                .catch(()=> console.log('error'));
            }else{
                res.status(404).send('Document Does Not Exist');
            }
            return false
        }
    )
    return false
});

    router.delete('/delete/userpins/:userID', (req, res) => {
        console.log('pin/del/userpins');
        let pinsRef = db.collection('pins')
        pinsRef.where("userID", "==", req.params.userID).get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc) => {
                doc.ref.delete().then((res) => {
                    console.log("Doc Deleted");
                    res.send("Successfully Deleted")
                    return res;
                }).catch(function(error) {
                    console.error('error deleting');
                    return error
                });
            });
            res.send("Finding User Data Successful")
            return true;
        })
        .catch(function(error) {
            console.log('error getting documents')
        })
        return false;
    })

    router.delete('/delete/:pinID', (request,response) =>{
        console.log('pin/del/pinid');
        let pinID = request.params.pinID;
        let pinsRef = db.collection('pins').doc(pinID);
        pinsRef.delete().then(() => response.send('success')).catch(()=> console.log('error'));
        return false
    });

module.exports = router;