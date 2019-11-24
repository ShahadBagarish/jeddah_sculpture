
const express = require('express')
const PORT = process.env.PORT || 6200
const server = express()
const ejsLayouts = require("express-ejs-layouts");



//database connection
require('./config/mongodb');
require("dotenv/config");
//diala change

//Authentication
const session = require('express-session')
//jwt and passports
const jwt = require('jsonwebtoken')
const passport = require('passport')
//mongoose connection
const mongooseConnect = require('./config/mongodb')
require("dotenv/config");

//import routes
const authRoutes = require("./routes/auth.routes");
const usersroutes = require('./routes/users.routes')
const sculptureroutes = require('./routes/sculpture.routes')
const activityRoute = require('./routes/activity');
const showRoutes = require('./routes/show')

//Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// EJS
server.set("view engine", "ejs");
server.use(ejsLayouts);


server.get('/about' ,(req , res) =>{
  res.render('about')
})



//create session for passport
server.set('trust proxy', 1)
server.use(session({
 secret : "test",
 resave : false,
 saveUninitialized : true
}))

server.use(passport.initialize())
server.use(passport.session())


//routes
server.use('/auth', require('./routes/auth.routes'))

//user routes
server.use('/users', passport.authenticate('jwt', {session: false}), usersroutes)

//Sculpture routes
server.use('/sculpture', passport.authenticate('jwt', {session: false}),sculptureroutes)

//activity routes
server.use('/activity', passport.authenticate('jwt', {session: false}),activityRoute)

//show routes
server.use('/show',showRoutes)

//cannot find route
server.use('*', (request, response) => {
 response.status(404).json({message : "Data not found!  "})
})

server.listen(PORT, () => console.log(`connected to ${PORT}`))
