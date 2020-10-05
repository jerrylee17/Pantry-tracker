const { makeExecutableSchema } = require('apollo-server');

const { linkSchema } = require('./links.js');
const { authorSchema } = require('./books.js');
const { resolvers } = require ('./../resolvers/index.js');

const schema = makeExecutableSchema({
    typeDefs: [ authorSchema, linkSchema ],
    resolvers: resolvers,
});

module.exports = schema;
