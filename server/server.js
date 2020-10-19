const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { schema } = require('./src/schema/index.js');
const cors = require('cors');

require('dotenv').config();
require('./database.js');

// const { schema } = compose.schema;
const server = new ApolloServer({ 
    schema,
    playground: true,
    introspection: true,

});
// context: ({ req, res }) => {
//     // https://www.apollographql.com/docs/apollo-server/api/apollo-server/
 
//     // Get the user token from the headers.
//     const token = req.headers.authorization || '';
 
//     // try to retrieve a user with the token
//     const user = getUser(token);
 
//     // add the user to the context
//     return { user };
//     },
const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.listen({ port:4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
