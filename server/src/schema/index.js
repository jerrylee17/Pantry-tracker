const { schemaComposer } = require('graphql-compose');

const { UserQuery, UserMutation } = require('./user.js');
const { PantryQuery, PantryMutation } = require('./pantry.js');
const { ContentsQuery, ContentsMutation } = require('./contents.js');
const { UserPantriesQuery, UserPantriesMutation } = require('./userPantries.js');
const { PantryContentsQuery, PantryContentsMutation } = require('./pantryContents.js');

schemaComposer.addTypeDefs(`
type AuthData {
  userID: ID
  token: String
  tokenExpiration: Int
  error: Boolean
}`);

schemaComposer.Query.addFields({
  ...UserQuery,
  ...PantryQuery,
  ...ContentsQuery,
  ...UserPantriesQuery,
  ...PantryContentsQuery,
});

schemaComposer.Mutation.addFields({
  ...UserMutation,
  ...PantryMutation,
  ...ContentsMutation,
  ...UserPantriesMutation,
  ...PantryContentsMutation,
});

const schema = schemaComposer.buildSchema();

module.exports = {
  schema
};
