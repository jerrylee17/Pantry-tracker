const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { composeMongoose } = require('graphql-compose-mongoose');

const PantrySchema = new mongoose.Schema(
    {
        owner: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Users',
                required: true,
            }
        ],
        name: {
            type: String,
            required: true,
            unique: true,
        },
        contents: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Contents',
            },
        ],
    },
    {
        collection: 'Pantries'
    }
);

PantrySchema.plugin(timestamps);
PantrySchema.index({ createdAt: 1, updatedAt: 1 })


const Pantry = mongoose.model('Pantry', PantrySchema);
const PantryTC = composeMongoose(Pantry);

module.exports = {
    PantrySchema,
    Pantry,
    PantryTC
};
