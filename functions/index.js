const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const cors = require("cors");
const express = require('express');

const PinController = require('./controllers/PinController');
//const UserController = require('./controllers/UserController');
const app = express();



app.use(cors());
app.use('/pins', PinController);
//app.use('/user', UserController)

 const api = functions.https.onRequest((request, response) => {
    if (!request.path) {
      request.url = `/${request.url}` // prepend '/' to keep query params if any
    }
    return app(request, response)
  })

  module.exports= {
    api
}

