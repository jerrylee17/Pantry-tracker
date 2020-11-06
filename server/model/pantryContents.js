const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { composeMongoose } = require('graphql-compose-mongoose');

const PantryContentsSchema = new mongoose.Schema(
  {
    pantry : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pantry',
      required: true,
    },
    contents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contents',
      },
    ],
  },
  {
    collection: 'Pantry_Contents'
  }
);

PantryContentsSchema.plugin(timestamps);
PantryContentsSchema.index({ createdAt: 1, updatedAt: 1 });

const PantryContents = mongoose.model('PantryContents', PantryContentsSchema);
const PantryContentsTC = composeMongoose(PantryContents);

module.exports = {
  PantryContentsSchema,
  PantryContents,
  PantryContentsTC
};
