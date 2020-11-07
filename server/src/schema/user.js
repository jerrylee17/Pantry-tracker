const { UserTC } = require('../../model/preloader');


const UserQuery = {
  userOne: UserTC.mongooseResolvers.findOne(),
  userMany: UserTC.mongooseResolvers.findMany(),
  userCount: UserTC.mongooseResolvers.count(),
};

const UserMutation = {
  userCreateOne: UserTC.mongooseResolvers.createOne(),
  userUpdateOne: UserTC.mongooseResolvers.updateOne(),
  userUpdateMany: UserTC.mongooseResolvers.updateMany(),
  userRemoveOne: UserTC.mongooseResolvers.removeOne(),
};

module.exports = {
  UserQuery,
  UserMutation,
};
