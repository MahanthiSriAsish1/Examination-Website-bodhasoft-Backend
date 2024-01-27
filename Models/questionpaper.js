import { Schema, model } from 'mongoose';

const questionpaper = new Schema({
    question:{
        type: String,
        require: true
    },
    options:{
        option1:{
            type: String,
            require: true
        },
        option2:{
            type: String,
            require: true
        },
        option3:{
            type: String,
            require: true
        },
        option4:{
            type: String,
            require: true
        }
    },
    correctAnswer:{
        type: String,
        require: true
    }

});

const questionPaper = model('questionPaper',questionpaper)

export default{
    questionPaper,
}