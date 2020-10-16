const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { composeMongoose } = require('graphql-compose-mongoose');

const UserPantriesSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        pantry_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pantry',
        },
    },
    {
        collection: 'Users_Pantries'
    }
);

UserPantriesSchema.plugin(timestamps);
UserPantriesSchema.index({ createdAt: 1, updatedAt: 1 })

const UserPantries = mongoose.model('User', UserPantriesSchema);
const UserPantriesTC = composeMongoose(User);

module.exports = {
    UserPantriesSchema,
    UserPantries,
    UserPantriesTC
};
