const { PantryContents, PantryContentsTC } = require('../../model/preloader');

const PantryContentsQuery = {
  pantryContentsById: PantryContentsTC.mongooseResolvers.findById(),
  pantryContentsByIds: PantryContentsTC.mongooseResolvers.findByIds(),
  pantryContentsOne: PantryContentsTC.mongooseResolvers.findOne(),
  pantryContentsMany: PantryContentsTC.mongooseResolvers.findMany(),
  pantryContentsCount: PantryContentsTC.mongooseResolvers.count(),
  pantryContentsConnection: PantryContentsTC.mongooseResolvers.connection(),
  pantryContentsPagination: PantryContentsTC.mongooseResolvers.pagination(),
};

const PantryContentsMutation = {
  pantryContentsCreateOne: PantryContentsTC.mongooseResolvers.createOne(),
  pantryContentsCreateMany: PantryContentsTC.mongooseResolvers.createMany(),
  pantryContentsUpdateById: PantryContentsTC.mongooseResolvers.updateById(),
  pantryContentsUpdateOne: PantryContentsTC.mongooseResolvers.updateOne(),
  pantryContentsUpdateMany: PantryContentsTC.mongooseResolvers.updateMany(),
  pantryContentsRemoveById: PantryContentsTC.mongooseResolvers.removeById(),
  pantryContentsRemoveOne: PantryContentsTC.mongooseResolvers.removeOne(),
  pantryContentsRemoveMany: PantryContentsTC.mongooseResolvers.removeMany(),
};

module.exports = {
  PantryContentsQuery,
  PantryContentsMutation
};
