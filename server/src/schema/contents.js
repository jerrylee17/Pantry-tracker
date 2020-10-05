const { Contents, ContentsTC } = require('../../model/contents');

const ContentsQuery = {
    contentsById: ContentsTC.mongooseResolvers.findById(),
    contentsByIds: ContentsTC.mongooseResolvers.findByIds(),
    contentsOne: ContentsTC.mongooseResolvers.findOne(),
    contentsMany: ContentsTC.mongooseResolvers.findMany(),
    contentsCount: ContentsTC.mongooseResolvers.count(),
    contentsConnection: ContentsTC.mongooseResolvers.connection(),
    contentsPagination: ContentsTC.mongooseResolvers.pagination(),
};

const ContentsMutation = {
    contentsCreateOne: ContentsTC.mongooseResolvers.createOne(),
    contentsCreateMany: ContentsTC.mongooseResolvers.createMany(),
    contentsUpdateById: ContentsTC.mongooseResolvers.updateById(),
    contentsUpdateOne: ContentsTC.mongooseResolvers.updateOne(),
    contentsUpdateMany: ContentsTC.mongooseResolvers.updateMany(),
    contentsRemoveById: ContentsTC.mongooseResolvers.removeById(),
    contentsRemoveOne: ContentsTC.mongooseResolvers.removeOne(),
    contentsRemoveMany: ContentsTC.mongooseResolvers.removeMany(),
};

module.exports = {
    ContentsQuery,
    ContentsMutation
};
