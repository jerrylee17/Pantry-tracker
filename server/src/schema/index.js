const  { schemaComposer } = require('graphql-compose');

const { UserQuery, UserMutation } = require('./user');
const { PantryQuery, PantryMutation } = require('./pantry');
const { ContentsQuery, ContentsMutation } = require('./contents');


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
