const express = require('express')
const mongoose = require("mongoose");
const router = express.Router()

// importing models
const Sculpture = require('../models/Sculpture')



// add scrupture
router.post('/new' , (req , res) => {

    let scrupture = new Sculpture({

      name:req.body.name,
      description:req.body.description,
      img:req.body.img,
      location:req.body.location,
      theme:req.body.theme

    })

    scrupture.save()
    .then(data=>{
      res.json(data)
    }).catch(err => {
      console.log(err);
      res.json({status:err})

    })
})


// Delete scrupture
router.delete('/remove/:id' , (req , res ) => {
    Sculpture.remove({_id:req.params.id})
    .then(() => {
      res.json({status:"Deleted"})
    }).catch(err => {
      res.json({msg:err})
    })
})



//find scrupture
router.get('/find/:id' , (req , res) => {
      Sculpture.findById(req.params.id)
      .then(data => {
        res.json(data)
      }).catch(err => {
        res.json({status:err})
      })
})





// Update scrupture

router.patch('/update/:id' , (req , res) => {

  Sculpture.updateOne({_id:req.params.id} ,

    {
      $set:{
      name:req.body.name ,
      description:req.body.description,
      img:req.body.img,
      location:req.body.location,
      theme:req.body.theme
      },

  }).then(data => {
    res.json(data)
  }).catch(err => {
    res.json({Message: err})
  });

})

// Get request that for guiding
router.get('/find' , (req , res) => {

          res.json({
            usage:"needs an id after the param",
            example: "find/whatEverIdYouGot"
          })

})

router.get('/remove' , (req , res) => {

          res.json({
            usage:"needs the '_id' after the param",
            example: "remove/whatEverMongoIdYouGot"
          })

})

router.get('/new' , (req , res) => {

          res.json({
            name:" - ",
            description: " - ",
            img: " - ",
            location: " - ",
            theme: " - "

          })

})

router.get('/' , (req , res) => {

          res.json({
            method : "Method avalible in this route",
            find: " To find by id ",
            remove:"to remove by id",
            new:"to add new scrupture data",
            update:"to update scrupture by ID"

          })

})

router.get('*' , (req , res ) => {

  res.json(
    {
  Message : "invalid param" ,
  code: "the params you're looking for is not exist"

})

});
module.exports = router
