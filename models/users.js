const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'please enter your name!'],
        trim: true
    },

    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: [true, 'please enter you email!]']
    },

    password: {
        type: String,
        trim: true,
        minlength: 4,
        required: [true, 'please enter your password!]']
    },
    isAdmin: {
        type: Number,
        default: 0
    },
    profilePic: {
        type: String,
        default: 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_account_circle_48px-1024.png',
    }

}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password;
            return ret;
        }
    }

})

module.exports = mongoose.model('User', userSchema);