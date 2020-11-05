const { UserPantries, UserPantriesTC } = require('../../model/preloader');

const UserPantriesQuery = {
    UserPantriesById: UserPantriesTC.mongooseResolvers.findById(),
    UserPantriesByIds: UserPantriesTC.mongooseResolvers.findByIds(),
    UserPantriesOne: UserPantriesTC.mongooseResolvers.findOne(),
    UserPantriesMany: UserPantriesTC.mongooseResolvers.findMany(),
    UserPantriesCount: UserPantriesTC.mongooseResolvers.count(),
    UserPantriesConnection: UserPantriesTC.mongooseResolvers.connection(),
    UserPantriesPagination: UserPantriesTC.mongooseResolvers.pagination(),
};

const UserPantriesMutation = {
    UserPantriesCreateOne: UserPantriesTC.mongooseResolvers.createOne(),
    UserPantriesCreateMany: UserPantriesTC.mongooseResolvers.createMany(),
    UserPantriesUpdateById: UserPantriesTC.mongooseResolvers.updateById(),
    UserPantriesUpdateOne: UserPantriesTC.mongooseResolvers.updateOne(),
    UserPantriesUpdateMany: UserPantriesTC.mongooseResolvers.updateMany(),
    UserPantriesRemoveById: UserPantriesTC.mongooseResolvers.removeById(),
    UserPantriesRemoveOne: UserPantriesTC.mongooseResolvers.removeOne(),
    UserPantriesRemoveMany: UserPantriesTC.mongooseResolvers.removeMany(),
};

module.exports = {
    UserPantriesQuery,
    UserPantriesMutation
};
