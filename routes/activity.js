const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

// Importing models
const Activity = require('../models/Activity')

// mew activity
router.post('/new' , (req , res) =>{

let activity = new Activity({

      name:req.body.name ,
      img: req.body.img ,
      activityDate: req.body.activityDate ,
      theme: req.body.theme

})

activity.save()
 .then(() => {
  res.json({status:"activity added successfully"})
}).catch(err => {
    res.json({status : err})
})
})


// remove Activity

router.delete('/delete/:id', (req , res ) => {

  Activity.remove({_id:req.params.id})
  .then(() => {
    res.json({status: "activity removed"})
  }).catch(err => {
    res.json({status:err})
  })

})



// Find activity
router.get('/find/:id' , (req , res) => {
      Activity.findById(req.params.id)
      .then(data => {
        res.json(data)
      }).catch(err => {
        res.json({status:err})
      })
})


// update activity
router.patch('/update/:id' , (req , res) => {

  Activity.updateOne({_id:req.params.id} ,

    {
      $set:{
      name:req.body.name ,
      img:req.body.img,
      activityDate:req.body.activityDate,
      theme:req.body.theme
      },

  }).then(data => {
    res.json({status:"Updated" ,changes:data.nModified})
  }).catch(err => {
    res.json({Message: err})
  });

})

// Get for guiding

router.get('/' , (req , res) => {

          res.json({
            method : "Method avalible in this route",
            find: " To find by id ",
            remove:"to remove by id",
            new:"to add new scrupture data",
            update:"to update scrupture by ID"

          })

})

// get to unknown
router.get('*' , (req , res ) => {

  res.json(
    {
  Message : "invalid param" ,
  code: "the params you're looking for is not exist"

})

});

module.exports = router
