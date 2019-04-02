const admin = require('firebase-admin');
const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const rp = require("request-promise");


admin.initializeApp(functions.config().firebase, "mapRouter");

const express = require('express');
const router = express.Router();
jsonParser = bodyParser.json();

router.post("/reverse-geo-code", jsonParser, (req, res) =>{

    console.log('line 15 map post reverse-geo-code')
    
    console.log(req.body);
    let latlng = `${req.body.lat},${req.body.lng}`
    let apiKey = functions.config().googlemapgeokey.key  
    let url= `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=${apiKey}`

    let options = {
        uri: url,
        json: true
    }

    rp(options).then((urlResp) => {
        res.send(urlResp);
        return true;
    }).catch( (err) => {
        res.send(err)
    });
    
    return false;
});

router.post("/geo-code", jsonParser, (req, res) =>{
    
    console.log('line 39 map post geo-code')


    let reqAdd = req.body.address;   
    let urlAdd = reqAdd.replace(/\s/,"+");
    let apiKey = functions.config().googlemapgeokey.key  
    let url= `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAdd}&key=${apiKey}`

    let options = {
        uri: url,
        json: true
    }

    rp(options).then((urlResp) => {
        console.log(urlResp);
        res.send(urlResp);
        return true;
    }).catch( (err) => {
        res.send(err)
    });
    
    return false;
});

module.exports = router;