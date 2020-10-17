const  { schemaComposer } = require('graphql-compose');

const { UserQuery, UserMutation } = require('./user.js');
const { PantryQuery, PantryMutation } = require('./pantry.js');
const { ContentsQuery, ContentsMutation } = require('./contents.js');
const { UserPantriesQuery, UserPantriesMutation } = require('./user_pantries');
const { PantryContentsQuery, PantryContentsMutation } = require('./pantry_contents');

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
