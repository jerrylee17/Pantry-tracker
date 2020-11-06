const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { composeMongoose } = require('graphql-compose-mongoose');

const PantrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
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
