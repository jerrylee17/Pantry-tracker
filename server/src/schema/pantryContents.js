const { PantryContents, PantryContentsTC } = require('../../model/preloader');

const PantryContentsQuery = {
    PantryContentsById: PantryContentsTC.mongooseResolvers.findById(),
    PantryContentsByIds: PantryContentsTC.mongooseResolvers.findByIds(),
    PantryContentsOne: PantryContentsTC.mongooseResolvers.findOne(),
    PantryContentsMany: PantryContentsTC.mongooseResolvers.findMany(),
    PantryContentsCount: PantryContentsTC.mongooseResolvers.count(),
    PantryContentsConnection: PantryContentsTC.mongooseResolvers.connection(),
    PantryContentsPagination: PantryContentsTC.mongooseResolvers.pagination(),
};

const PantryContentsMutation = {
    PantryContentsCreateOne: PantryContentsTC.mongooseResolvers.createOne(),
    PantryContentsCreateMany: PantryContentsTC.mongooseResolvers.createMany(),
    PantryContentsUpdateById: PantryContentsTC.mongooseResolvers.updateById(),
    PantryContentsUpdateOne: PantryContentsTC.mongooseResolvers.updateOne(),
    PantryContentsUpdateMany: PantryContentsTC.mongooseResolvers.updateMany(),
    PantryContentsRemoveById: PantryContentsTC.mongooseResolvers.removeById(),
    PantryContentsRemoveOne: PantryContentsTC.mongooseResolvers.removeOne(),
    PantryContentsRemoveMany: PantryContentsTC.mongooseResolvers.removeMany(),
};

module.exports = {
    PantryContentsQuery,
    PantryContentsMutation
};
