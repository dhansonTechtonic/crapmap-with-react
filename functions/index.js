const functions = require("firebase-functions");
const cors = require("cors");
const admin = require('firebase-admin');
const express = require('express');
admin.initializeApp(functions.config().firebase); //importing firebase-functions in which case you don't need to service account JSON at all
  

const listings = express();
let db = admin.firestore();
listings.use(cors({ origin: true}));

listings.get("/myListings", (request, response) =>{
    let itemsRef = db.collection('listings');
    let query = itemsRef.get().then(function(querySnapshot){
        if(querySnapshot){
            console.log(querySnapshot.docs);
            response.send(querySnapshot.docs.json());
        }else{
            response.send("Collection does not exist");
        }
        return false;
    }).catch (err => err)
});

const apiListings = functions.https.onRequest((request, response) => {
    if (!request.path) {
      request.url = `/${request.url}` // prepend '/' to keep query params if any
    }
    return listings(request, response)
  })



module.exports= {
    apiListings
}

