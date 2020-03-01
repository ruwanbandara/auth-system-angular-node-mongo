const express = require('express')
const router = express.Router()
const User = require('../models/user')

const mongoose = require('mongoose')
const db = "mongodb+srv://ruwan:ruwan123@auth-system-eplbx.mongodb.net/test?retryWrites=true&w=majority"

// const MongoClient = require('mongodb').MongoClient;
// const db = "mongodb+srv://ruwan:ruwan123@auth-system-eplbx.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(db, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("eventsdb").collection("users");
//     // perform actions on the collection object
//     client.close();
// });


mongoose.connect(db, err =>{
    if (err){
        console.error('Error'+ err)
    }else {
        console.log('Connected to mongodb')
    }
})
router.get('/',( req, res) => {
    res.send('From API route')
})
router.post('/register', (req, res) =>{
    let userData =req.body
    let user = new User(userData)
    user.save((error, registeredUser)=>{
        if (error){
            console.log(error)
        }else {
            res.status(200).send(registeredUser)
        }
    })
})

module.exports = router

