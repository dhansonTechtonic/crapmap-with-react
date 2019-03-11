const functions = require('firebase-functions');
const cors = require("cors");
const admin = require("firebase-admin");
const express = require("express");
admin.initializeApp(functions.config().firebase); //importing firebase-functions in which case you dont need to service account json at all


const listings = express();
let db = admin.firestore();
listings.use(cors({ origin: true}));

listings.get("/myListings", (request, response) =>{
    let itemsRef = db.collection('listings');
    let query = itemsRef.get().then(function(querySnapshot){
        if(querySnapshot){
            console.log(querySnapshot);
            response.send(querySnapshot);
        }else{
            response.send("Collection does not exist");
        }
        return false;
    }).catch (err => err)
});



module.exports= {
    listings
}

