const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { composeMongoose } = require('graphql-compose-mongoose');

const UserPantriesSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        pantry: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pantry',
        },
    },
    {
        collection: 'UserPantries'
    }
);

UserPantriesSchema.plugin(timestamps);
UserPantriesSchema.index({ createdAt: 1, updatedAt: 1 })

const UserPantries = mongoose.model('UserPantries', UserPantriesSchema);
const UserPantriesTC = composeMongoose(UserPantries);

module.exports = {
    UserPantriesSchema,
    UserPantries,
    UserPantriesTC
};
