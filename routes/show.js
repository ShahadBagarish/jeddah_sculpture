const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

// importing models
const Activity = require('../models/Activity')
const Sculpture = require('../models/Sculpture')


// the purpse of this route is to display the data inside the DB
// nothing more than showing the data :)




router.get('/scrupture' , (req , res) => {

          Sculpture.find()
          .then(data => {
            res.json(data)
          }).catch(err => {
            res.json(err)
          })
})




router.get('/activity' , (req , res) => {

          Activity.find()
          .then(data => {
            res.json(data)
          }).catch(err => {
            res.json(err)
          })
})



router.get('/' , (req , res ) => {

  res.json(
    {
  Message : "invalid param" ,
  code: "you need to specify what model you want to display in the param",
  example: "http://domain/show/activity"

})

});



router.get('*' , (req , res ) => {

  res.json(
    {
  Message : "invalid param" ,
  code: "the params you're looking for is not exist"

})

});






module.exports = router
