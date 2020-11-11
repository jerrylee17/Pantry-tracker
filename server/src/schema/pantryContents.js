const { Contents } = require('../../model/contents');
const { PantryContents, PantryContentsTC } = require('../../model/preloader');


const PantryContentsQuery = {
  pantryContentsOne: PantryContentsTC.mongooseResolvers.findOne(),
  pantryContentsMany: PantryContentsTC.mongooseResolvers.findMany(),
  pantryContentsCount: PantryContentsTC.mongooseResolvers.count(),
};

const PantryContentsMutation = {
  pantryContentsCreateOne: PantryContentsTC.mongooseResolvers.createOne(),
  pantryContentsUpdateOne: PantryContentsTC.mongooseResolvers.updateOne(),
  pantryContentsUpdateMany: PantryContentsTC.mongooseResolvers.updateMany(),
  pantryContentsRemoveOne: PantryContentsTC.mongooseResolvers.removeOne(),
  pantryRefresh: {
    type: PantryContentsTC,
    args: {
      pantryID: 'MongoID!',
      contentNames: '[String]',
      contentAmounts: '[Int]'
    },
    resolve: async (source, args) => {
      const {
        pantryID,
        contentNames,
        contentAmounts
      } = args;
      let contentsToPush = [];
      // Must be same length
      if (contentNames.length != contentAmounts.length) return null;
      // Data processing
      for (let i = 0; i < contentNames.length; i++) {
        contentsToPush.push({
          pantry: pantryID,
          name: contentNames[i],
          count: contentAmounts[i]
        });
      }
      // Wipe items that are currently connected with pantry
      await Contents.deleteMany(
        { pantry: pantryID }
      );
      await PantryContents.deleteOne(
        { pantry: pantryID }
      );

      // Put new contents into database
      const contents = await Contents.insertMany(
        contentsToPush,
        {
          upsert: true
        }
      );
      const pantryContents = await PantryContents.create(
        {
          pantry: pantryID,
          contents: contents.map((item) => (item._id))
        }
      );
      return pantryContents;
    }
  }
};

module.exports = {
  PantryContentsQuery,
  PantryContentsMutation
};
