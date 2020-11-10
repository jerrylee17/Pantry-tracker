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
const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  // eslint-disable-next-line
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
