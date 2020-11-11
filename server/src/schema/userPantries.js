const { Pantry } = require('../../model/pantry');
const { UserPantries, UserPantriesTC } = require('../../model/preloader');
const { User } = require('../../model/user');

const UserPantriesQuery = {
  userPantriesOne: UserPantriesTC.mongooseResolvers.findOne(),
  userPantriesMany: UserPantriesTC.mongooseResolvers.findMany(),
  userPantriesCount: UserPantriesTC.mongooseResolvers.count(),
};

const UserPantriesMutation = {
  userPantriesCreateOne: UserPantriesTC.mongooseResolvers.createOne(),
  userPantriesUpdateOne: UserPantriesTC.mongooseResolvers.updateOne(),
  userPantriesUpdateMany: UserPantriesTC.mongooseResolvers.updateMany(),
  userPantriesRemoveOne: UserPantriesTC.mongooseResolvers.removeOne(),
  userAddNewPantry: {
    type: UserPantriesTC,
    args: {
      username: 'String!',
      pantryName: 'String!'
    },
    resolve: async (source, args) => {
      const {
        username,
        pantryName
      } = args;
      // Create pantry
      const pantry = await Pantry.create({
        name: pantryName
      });
      // if error
      if (!pantry) return null;

      // Find user
      const user = await User.findOne({ username: username });
      // if error
      if (!user) return null;

      // Add pantry to user array
      const userPantryEntry = await UserPantries.findOneAndUpdate(
        { owner: user },
        { $addToSet: { pantries: pantry } },
        {
          new: true,
          upsert: true,
          useFindAndModify: false,
        },
      );
      return userPantryEntry;
    }
  },
  userAddExistingPantry: {
    type: UserPantriesTC,
    args: {
      username: 'String!',
      pantryID: 'MongoID!'
    },
    resolve: async (source, args) => {
      const {
        username,
        pantryID
      } = args;
      // Create pantry
      const pantry = await Pantry.findOne({
        _id: pantryID
      });
      // if error
      if (!pantry) return null;

      // Find user
      const user = await User.findOne({ username: username });
      // if error
      if (!user) return null;

      // Add pantry to user array
      const userPantryEntry = await UserPantries.findOneAndUpdate(
        { owner: user },
        { $addToSet: { pantries: pantry } },
        {
          new: true,
          upsert: true,
          useFindAndModify: false,
        },
      );
      return userPantryEntry;
    }
  },
  userRemovePantry: {
    type: UserPantriesTC,
    args: {
      username: 'String!',
      pantryID: 'MongoID!'
    },
    resolve: async (source, args) => {
      const {
        username,
        pantryID
      } = args;

      // Find user
      const user = await User.findOne({ username: username });
      // if error
      if (!user) return null;

      // Remove null pantries from user's list
      const userPantryEntry = await UserPantries.findOneAndUpdate(
        { owner: user },
        { $pull: { pantries: pantryID } },
        {
          new: true,
          useFindAndModify: false,
        },
      );
      if (!userPantryEntry) return null;
      return userPantryEntry;
    }
  }
};

module.exports = {
  UserPantriesQuery,
  UserPantriesMutation
};
