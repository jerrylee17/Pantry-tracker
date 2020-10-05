const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const schema = require('./schema/index.js');
const { Sequelize } = require('sequelize');

require('dotenv').config();
// const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

async function lordie() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established succesfully.');
    } catch (error) {
        console.error('Unable to connect to the db');
    }
}
// lordie();

// console.log('schema from other side', schema);
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
