const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { composeWithMongoose } = require('graphql-compose-mongoose');

const ContentsSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        count: {
            type: Number,
            min: 0,
        },
    },
    {
        collection: 'contents'
    }
);

ContentsSchema.plugin(timestamps);
ContentsSchema.index({ createdAt: 1, updatedAt: 1 })

const Contents = mongoose.model('Contents', ContentsSchema);
const ContentsTC = composeWithMongoose(Contents);

module.exports = {
    ContentsSchema,
    Contents,
    ContentsTC
}
