const { Contents, ContentsTC } = require('../../model/contents');

const contentsQuery = {
    contentsById: ContentsTC.getResolver('findById'),
    contentsByIds: ContentsTC.getResolver('findByIds'),
    contentsOne: ContentsTC.getResolver('findOne'),
    contentsMany: ContentsTC.getResolver('findMany'),
    contentsCount: ContentsTC.getResolver('count'),
    contentsConnection: ContentsTC.getResolver('connection'),
    contentsPagination: ContentsTC.getResolver('pagination'),
};

const contentsMutation = {
    contentsCreateOne: ContentsTC.getResolver('createOne'),
    contentsCreateMany: ContentsTC.getResolver('createMany'),
    contentsUpdateById: ContentsTC.getResolver('updateById'),
    contentsUpdateOne: ContentsTC.getResolver('updateOne'),
    contentsUpdateMany: ContentsTC.getResolver('updateMany'),
    contentsRemoveById: ContentsTC.getResolver('removeById'),
    contentsRemoveOne: ContentsTC.getResolver('removeOne'),
    contentsRemoveMany: ContentsTC.getResolver('removeMany'),
};

module.exports = {
    contentsQuery,
    contentsMutation
}
