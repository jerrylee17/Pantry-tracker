const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { composeWithMongoose } = require('graphql-compose-mongoose');

const PantrySchema = new mongoose.Schema(
    {
        _id: {
            type: String,
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        contents: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'contents',
            },
        ],
    },
    {
        collection: 'pantries'
    }
);

PantrySchema.plugin(timestamps);
PantrySchema.index({ createdAt: 1, updatedAt: 1 })


const Pantry = mongoose.model('Pantry', PantrySchema);
const PantryTC = composeWithMongoose(Pantry);

module.exports = {
    PantrySchema,
    Pantry,
    PantryTC
}
