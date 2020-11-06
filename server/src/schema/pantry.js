const { Pantry, PantryTC } = require('../../model/preloader');

const PantryQuery = {
  pantryById: PantryTC.mongooseResolvers.findById(),
  pantryByIds: PantryTC.mongooseResolvers.findByIds(),
  pantryOne: PantryTC.mongooseResolvers.findOne(),
  pantryMany: PantryTC.mongooseResolvers.findMany(),
  pantryCount: PantryTC.mongooseResolvers.count(),
  pantryConnection: PantryTC.mongooseResolvers.connection(),
  pantryPagination: PantryTC.mongooseResolvers.pagination(),
};

const PantryMutation = {
  pantryCreateOne: PantryTC.mongooseResolvers.createOne(),
  pantryCreateMany: PantryTC.mongooseResolvers.createMany(),
  pantryUpdateById: PantryTC.mongooseResolvers.updateById(),
  pantryUpdateOne: PantryTC.mongooseResolvers.updateOne(),
  pantryUpdateMany: PantryTC.mongooseResolvers.updateMany(),
  pantryRemoveById: PantryTC.mongooseResolvers.removeById(),
  pantryRemoveOne: PantryTC.mongooseResolvers.removeOne(),
  pantryRemoveMany: PantryTC.mongooseResolvers.removeMany(),
};

module.exports = {
  PantryQuery,
  PantryMutation
};
