const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query { 
        books: [Book]
    }
`;
const books = [
    {
        title: 'Harry Potter and the something somethign',
        author: 'J.K. Rowling',
    },
    {
        title: 'lordie',
        author: 'god'
    },
];

const resolvers = {
    Query: {
        books: () => books,
    },

};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

app.listen({ port:4000 }, () => 
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);


// const cors = require('cors');
// const server = express();

// const index = require('./Routes/User');

// server.use(cors());
// server.use(express.json());

// server.use('/', index);
// server.listen(8080, () => {
//     console.log('Server listening on port 8080');
// })
