
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

const Query = gql`
    type Query { 
        author(id: Int!): Author
    }
`;


const resolvers = merge(authorResolvers, linksResolvers);

const schema = makeExecutableSchema({
    typeDefs: [ Author, Links ],
    resolvers: resolvers,
});

// console.log('schema before sending', schema);

module.exports = schema;
// exports = { schema };

