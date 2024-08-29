const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    roll: 
    {
        type: Number,
        required: true
    },
    pass: 
   {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Alien',alienSchema)
