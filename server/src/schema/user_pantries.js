const { UserPantries, UserPantriesTC } = require('../../model/preloader');

const UserPantriesQuery = {
    userPantriesById: UserPantriesTC.mongooseResolvers.findById(),
    userPantriesByIds: UserPantriesTC.mongooseResolvers.findByIds(),
    userPantriesyOne: UserPantriesTC.mongooseResolvers.findOne(),
    userPantriesMany: UserPantriesTC.mongooseResolvers.findMany(),
    userPantriesCount: UserPantriesTC.mongooseResolvers.count(),
    userPantriesConnection: UserPantriesTC.mongooseResolvers.connection(),
    userPantriesPagination: UserPantriesTC.mongooseResolvers.pagination(),
};

const UserPantriesMutation = {
    userPantriesCreateOne: UserPantriesTC.mongooseResolvers.createOne(),
    userPantriesCreateMany: UserPantriesTC.mongooseResolvers.createMany(),
    userPantriesUpdateById: UserPantriesTC.mongooseResolvers.updateById(),
    userPantriesUpdateOne: UserPantriesTC.mongooseResolvers.updateOne(),
    userPantriesUpdateMany: UserPantriesTC.mongooseResolvers.updateMany(),
    userPantriesRemoveById: UserPantriesTC.mongooseResolvers.removeById(),
    userPantriesRemoveOne: UserPantriesTC.mongooseResolvers.removeOne(),
    userPantriesRemoveMany: UserPantriesTC.mongooseResolvers.removeMany(),
};

module.exports = {
    UserPantriesQuery,
    UserPantriesMutation
};
