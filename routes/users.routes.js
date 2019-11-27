const User = require('../models/User');
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt')

router.get('/', (req, res) => {
  User.find()
    .then(data => {
      res.json({msg:"hi", data:data})
    })
})



router.put('/changepassowrd/:id', async (req, res) => {
  try {
    let cryptPassword = await bcrypt.hash(req.body.password, 10)
    const updatepost = await User.findOneAndUpdate({ "_id": req.params.id }, { "password": cryptPassword })
    res.json({ msg: "updated", updatepost })
  } catch (err) {
    res.json({ message: err })
  }
})

router.put('/changeusername/:id', async (req, res) => {
  try {
    const updatepost = await User.findOneAndUpdate({ "_id": req.params.id }, { "username": req.body.username })
    res.json({ msg: "updated", updatepost })
  } catch (err) {
    res.json({ message: err })
  }
})
module.exports = router
