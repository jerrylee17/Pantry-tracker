const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs'); need later

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        joinDate: {
            type: Date,
            default: Date.now
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
        },
        emailVerified: {
            type: Boolean,
            default: false
        }
    },
    { 
        collection: 'User'
    }
);

// we will need to implement later
// UserSchema.pre('save', function(next)) {
//     const user = this;

// }
module.exports = mongoose.model('User', UserSchema);
