const admin = require('firebase-admin');
const functions = require("firebase-functions");
admin.initializeApp(functions.config().firebase, "commentsRouter");
const bodyParser = require("body-parser");
jsonParser = bodyParser.json();

let db = admin.firestore();
const express = require('express');
const router = express.Router();

router.post('/comment/', (req, res) => {

            console.log('line 13 comment post')

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

router.get('/comment/:commentID', (req, res) => {
        console.log('commentGet line 35')
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
    console.log('get comment by pin id line 51')
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
    console.log('delete comment by comment id line 66')
    let commentID = req.params.commentID;
    let commentsRef = db.collection('comments').doc(commentID);

    commentsRef.delete().then(() => res.send('success')).catch(() => console.log('error'));
    return false
});

module.exports = router;