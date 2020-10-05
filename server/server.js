const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { schema } = require('./src/schema/index.js');

require('dotenv').config();
require('./database.js');

// const { schema } = compose.schema;
const server = new ApolloServer({ 
    schema,
    playground: true,
    introspection: true
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port:4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
