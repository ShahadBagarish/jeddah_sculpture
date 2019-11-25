const mongoose = require('mongoose')
require("dotenv/config");

mongoose.connect('mongodb://localhost/Jeddah-Sculpture',{ useNewUrlParser : true})
.then((   ) => console.log('connected MongDB'),
      (err) => console.log(err))

mongoose.set('useCreateIndex', true)