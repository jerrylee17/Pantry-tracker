const  { schemaComposer } = require('graphql-compose');

const { UserQuery, UserMutation } = require('./user.js');
const { PantryQuery, PantryMutation } = require('./pantry.js');
const { ContentsQuery, ContentsMutation } = require('./contents.js');

schemaComposer.Query.addFields({
    ...UserQuery,
    ...PantryQuery,
    ...ContentsQuery,
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...PantryMutation,
    ...ContentsMutation,
});

const schema = schemaComposer.buildSchema();

module.exports = {
    schema
};
