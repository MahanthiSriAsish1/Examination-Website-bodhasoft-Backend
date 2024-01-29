const mongoose = require('mongoose')

const results = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },

    score:{
        type: Number,
        require:true
    }

    
})

const Results = mongoose.model ('Results',results,'Results')
module.exports = Results;