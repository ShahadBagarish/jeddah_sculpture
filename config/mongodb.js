const mongoose = require('mongoose')
require("dotenv/config");

mongoose.connect(process.env.DEV_DB,{ useNewUrlParser : true})
.then((   ) => console.log('connected MongDB'),
      (err) => console.log(err))

mongoose.set('useCreateIndex', true)
