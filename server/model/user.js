const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        _id : {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        pantries: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'pantry',
            },
        ]
    },
    {
        collection: 'users'
    }
);

UserSchema.plugin(timestamps);
UserSchema.index({ createdAt: 1, updatedAt: 1 })

UserSchema.pre('save', () => {
    const salt = bcrypt.genSaltSync(15);
    const hashedPassword = bcrypt.hashSynch(this.password, salt);
    // to add functionality to allow users to change their pw make a new var
    // user, check to see if they modified their password, and if they did
    // change password and return next();
    this.password = hashedPassword; 
    return next();
});

const User = mongoose.model('User', UserSchema);
const UserTC = composeWithMongoose(User);

module.exports = {
    UserSchema,
    User,
    UserTC
}
