const mongoose = require('mongoose')
const activitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    activityDate: {
        type: Date,
        required: true
    },
    theme: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Activity', activitySchema)
