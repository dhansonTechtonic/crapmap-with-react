const admin = require('firebase-admin');
const functions = require("firebase-functions");
admin.initializeApp(functions.config().firebase, "commentsRouter");
const bodyParser = require("body-parser");
jsonParser = bodyParser.json();

let db = admin.firestore();
const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'crapmapsupport',
        pass: 'passw0rd'
    }
});

router.post('/testEmail',(req,res)=>{
    let mailOptions = {
        from: 'joshua.archer@techtonic.com',
        to: 'joshua.archer@techtonic.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send(error);
        } else {
            res.status(200).send({info: info, msg: 'worked'});
            console.log('Email sent: ' + info.response);
        }
    });
    
})

// psuedo code 
// router.post('/send', (req, res, next) => {
//     var name = req.body.name
//     var email = req.body.email
//     var message = req.body.message

//     var mail = {
//         from: name,
//         to: email,  //Change to email address that you want to receive messages on
//         subject: message,
//         text: content
//     }

//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             res.json({
//                 msg: 'fail'
//             })
//         } else {
//             res.json({
//                 msg: `${postCommenter} commented on your post`
//             })
//         }
//     })
// })

router.post('/comment/', (req, res) => {
    console.log('in comment endpoint')
            let commentObj = {
                author: req.body.author,
                date: new Date(),
                body: req.body.body,
                pinID: req.body.pinID,
                userID: req.body.userID
            }
            console.log(commentObj)

            let commentsDB = db.collection('comments')

            commentsDB.add(commentObj)
            .then(async (res) => {
                console.log(res)
                var pin = await db.collection('pins').doc(req.body.pinID).get();
                console.log('pin below');
                console.log(pin);
                console.log(pin.docs[0].userID);
                // var postUser = pin.docs[0].userID;

                let mailOptions = {
                    from: 'crapmapsupport@crapmap-c5c7f.firebaseapp.com',
                    to: res.body.author,
                    subject: 'Sending Email using Node.js',
                    text: 'That was easy!'
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.send("posted")
                return res;
            })
            .catch(err => err);
        }
    )

router.get('/comment/:commentID', (req, res) => {
        let commentsDB = db.collection('comments');
        let targetID = req.params.pinID

        commentsDB.doc(targetID).get()
            .then(function (querySnapshot){
                if(querySnapshot.exists){
                    res.send(querySnapshot.data())
                } else {
                    res.send('error getting comments')
                }
                return false;
            }).catch(err => console.log(err))
})

router.get('/get/:pinID', (req, res) => {
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
    let commentID = req.params.commentID;
    let commentsRef = db.collection('comments').doc(commentID);

    commentsRef.delete().then(() => res.send('success')).catch(() => console.log('error'));
    return false
});

module.exports = router;