const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { composeMongoose } = require('graphql-compose-mongoose');

const UserPantriesSchema = new mongoose.Schema(
  {
    owners : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
      },
    ],
    pantries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pantries',
        required: true,
      },
    ]
  },
  {
    collection: 'User_Pantries'
  }
);

UserPantriesSchema.plugin(timestamps);
UserPantriesSchema.index({ createdAt: 1, updatedAt: 1 });

const UserPantries = mongoose.model('UserPantries', UserPantriesSchema);
const UserPantriesTC = composeMongoose(UserPantries);

module.exports = {
  UserPantriesSchema,
  UserPantries,
  UserPantriesTC
};
