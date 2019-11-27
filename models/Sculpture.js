const mongoose = require('mongoose')
const sculptureSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    artist:{
        type: String,
        required: true
    },
    date:{
        type: String,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Sculpture', sculptureSchema)
