const { ContentsTC } = require('../../model/preloader');

const ContentsQuery = {
  contentsOne: ContentsTC.mongooseResolvers.findOne(),
  contentsMany: ContentsTC.mongooseResolvers.findMany(),
  contentsCount: ContentsTC.mongooseResolvers.count(),
};

const ContentsMutation = {
  contentsCreateOne: ContentsTC.mongooseResolvers.createOne(),
  contentsUpdateOne: ContentsTC.mongooseResolvers.updateOne(),
  contentsUpdateMany: ContentsTC.mongooseResolvers.updateMany(),
  contentsRemoveOne: ContentsTC.mongooseResolvers.removeOne(),
};

module.exports = {
  ContentsQuery,
  ContentsMutation
};
