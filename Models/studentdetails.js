const mongoose = require('mongoose')

const studentdetails = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique:[true,'username is not unique, please enter a unique username'],
        trim: true,
        minlength: 9
    },

    password:{
        type:String,
        require: true,
        trim: true,
        minlength: 8,
        validate: {
            validator: function (value) {
              return /^(?=.*[!@#$%^&*(),.?":{}|<>]).*$/.test(value);
            },
            message: 'Password must include at least one special character.',
          },
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
})


const studentDetails = mongoose.model ('studentDetails',studentdetails, 'studentDetails');

module.exports = studentDetails