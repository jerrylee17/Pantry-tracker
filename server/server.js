const express = require('express');
const { ApolloServer } = require('apollo-server-express');
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
// context: ({ req }) => {
//     // Note! This example uses the `req` object to access headers,
//     // but the arguments received by `context` vary by integration.
//     // This means they will vary for Express, Koa, Lambda, etc.!
//     //
//     // To find out the correct arguments for a specific integration,
//     // see the `context` option in the API reference for `apollo-server`:
//     // https://www.apollographql.com/docs/apollo-server/api/apollo-server/

//     // Get the user token from the headers.
//     const token = req.headers.authorization || '';

//     // try to retrieve a user with the token
//     const user = getUser(token);

//     // add the user to the context
//     return { user };
// },
const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.listen({ port:4000 }, () =>
  // eslint-disable-next-line
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`) 
);
