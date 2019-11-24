
const User = require('../models/User');
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const passport = require('passport');

const passportHelper = require('../config/passport')


router.get('/', (request, response, next) => {
  //custom jwt authenticate
  passport.authenticate('jwt', {session: false}, (err, user, info)=>{
      console.log("got here")
      if(err){ return response.status(400).json({ message: err }) }

      if(info !== undefined){
        return response.json({ message: info.message })
      }else{
        User.find({})
        .then((user)=>{
          response.json({ user: user });
        })

      }
  })(request, response, next)

  
})

router.post('/register', (request, response)=>{

  let data = {
    firstname : request.body.firstname ,
    lastname : request.body.lastname,
    username: request.body.username,
    password: request.body.password,
    email: request.body.email,
    isAdmin: request.body.isAdmin,
    Activity: request.body.Activity
  }

  let user = new User(data)
  
  user.save()
  .then(()=> {
    response.status(200).json({ message : "Registered Successfully" })
  })
  .catch(err =>{
    response.status(401).json({ message : "You are not Allowed to Register"})
  })

})


router.post('/login', (request, response) => {

  passport.authenticate('local', {session: false}, (err, user, info) => {

    if (err || !user) {
        return response.status(401).json({
            message: info ? info.message : 'Login failed',
            user   : user
        });
    }

   request.login(user, {session: false}, (err) => {
          if (err) {
              return response.status(401).json({message: err});
          }
          user.password = '' //remove password
          console.log(user)
          const token = jwt.sign(user.toJSON(), process.env.JWTSecret, { expiresIn: 60 * 60 });
          return response.status(200).json({user, token});
        });
    })(request, response);
   
})


module.exports = router