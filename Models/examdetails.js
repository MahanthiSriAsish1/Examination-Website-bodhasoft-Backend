const mongoose = require('mongoose')

const examdetails = new mongoose.Schema({
    ExamName:{
        type: String,
        require: true,
        trim: true
    },

    QuestionCount:{
        type: Number,
        require:true
    },

    ExamDuration:{
        type:Number,
        require: true
    },

    Instructions:{
        type:String,
        require: true
    }
})

const examDetails = new mongoose.model('examDetails', examdetails, 'TestDetails')

module.exports = examDetails