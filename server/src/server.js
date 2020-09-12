const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const schema = require('./schema/schema.js');

// console.log('schema from other side', schema);
const server = new ApolloServer({ 
    schema,
    playground: true
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port:4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
