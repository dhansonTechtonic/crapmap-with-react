const admin = require('firebase-admin');
const functions = require("firebase-functions");
admin.initializeApp(functions.config().firebase, "commentsRouter");
const bodyParser = require("body-parser");
// let jsonParser = bodyParser.json();
let db = admin.firestore();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'crapmap.alerts@gmail.com',
        pass: 'crapmapSupport5!'
    },
    tls: {
        rejectUnauthorized: false
    }
});

router.post('/comment/', (req, res) => {

            console.log('comments/post/comment')

            let commentObj = {
                author: req.body.author,
                date: new Date(),
                body: req.body.body,
                pinID: req.body.pinID,
                userID: req.body.userID
            }

            let commentsDB = db.collection('comments')

            commentsDB.add(commentObj)
            .then(res => {
                res.send("posted")
                return res;
            })
            .catch(err => err);
        }
    )

    router.post('/email/:pinID', (req, res) => {
            console.log('comments/post/email')
            let pinID = req.params.pinID;
            let commentsDB = db.collection('comments');
            let targetComment = commentsDB.where("pinID", "==", req.params.pinID).get().then(function (querySnapshot) {
                if (querySnapshot) {
                    return querySnapshot.docs
                }
            return false;
            }).catch(err => console.log(err))

            console.log(targetComment);

            let mailOptions = {
                from: 'crapmap.alerts@gmail.com',
                to: 'joshua.archer@techtonic.com',
                subject: 'CrapMap - New Comment!',
                text: 'New Comment on your post: ' + String(pinID)
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.send("Error sending email")
                } else {
                    console.log('Email sent: ' + info.response);
                    res.send("Email Sent");
                }
            });
     
         return res;
        }
    )


router.get('/get/:pinID', (req, res) => {
    console.log('comments/get/pinID')
    let commentsDB = db.collection('comments');

    commentsDB.where("pinID", "==", req.params.pinID).get()
        .then(function (querySnapshot) {
            if (querySnapshot) {
                res.send(querySnapshot.docs)
            } else {
                res.send('error getting comments')
            }
            return false;
        }).catch(err => console.log(err))
})

router.delete('/delete/:commentID', (req, res) => {
    console.log('comments/delete/commentID')
    let commentID = req.params.commentID;
    let commentsRef = db.collection('comments').doc(commentID);

    commentsRef.delete().then(() => res.send('success')).catch(() => console.log('error'));
    return false
});

module.exports = router;