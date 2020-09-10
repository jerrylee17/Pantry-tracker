
const { gql, makeExecutableSchema } = require('apollo-server');
const { merge } = require('lodash');
const { 
    Links,
    linksResolvers
} = require('./links.js');

const { 
    Author,
    authorResolvers,
} = require('./books.js');

const Query = `
    type Query { 
        author(id: Int!): Author
    }
`;

const resolvers = {}

const schema = makeExecutableSchema({
    typeDefs: [ Query, Author, Links ],
    resolvers: merge(resolvers, authorResolvers, linksResolvers),
});


module.exports = schema;
