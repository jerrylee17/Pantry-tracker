const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { composeMongoose } = require('graphql-compose-mongoose');

const ContentsSchema = new mongoose.Schema(
    {
        pantry : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pantry',
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            min: 0,
        },
    },
    {
        collection: 'Contents'
    }
);

ContentsSchema.plugin(timestamps);
ContentsSchema.index({ createdAt: 1, updatedAt: 1 })

const Contents = mongoose.model('Contents', ContentsSchema);
const ContentsTC = composeMongoose(Contents);

module.exports = {
    ContentsSchema,
    Contents,
    ContentsTC
};
