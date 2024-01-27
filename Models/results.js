import { Schema,model } from "mongoose";

const results = new Schema({
    name:{
        type:String,
        require:true,
    },

    score:{
        type: Number,
        require:true
    }

    
})

const Results = new model ('Results',results)

export default{
    Results
}