const { Pantry, PantryTC } = require('../../model/preloader');

const PantryQuery = {
  pantryOne: PantryTC.mongooseResolvers.findOne(),
  pantryMany: PantryTC.mongooseResolvers.findMany(),
  pantryCount: PantryTC.mongooseResolvers.count(),
};

const PantryMutation = {
  pantryCreateOne: PantryTC.mongooseResolvers.createOne(),
  pantryUpdateOne: PantryTC.mongooseResolvers.updateOne(),
  pantryUpdateMany: PantryTC.mongooseResolvers.updateMany(),
  pantryRemoveOne: PantryTC.mongooseResolvers.removeOne(),
  pantryRemoveMany: PantryTC.mongooseResolvers.removeMany(),
};

module.exports = {
  PantryQuery,
  PantryMutation
};
