const mongoose = require('mongoose')

const results = new mongoose.Schema({
    FullName:{
        type:String,
        require:true,
        trim : true
    },

    College:{
        type:String,
        require:true,
        trim : true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                const validDomains = ['gmail.com', 'hotmail.com'];
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailRegex.test(value)) {
                    return false;
                }

                const domain = value.split('@')[1];
                return validDomains.includes(domain);
            },
            message: 'Invalid email format or domain. Only gmail.com or hotmail.com are allowed.',
        },
    },

    score:{
        type: Number,
        require:true
    }

    
})

const Results = mongoose.model ('Results',results,'Results')
module.exports = Results;