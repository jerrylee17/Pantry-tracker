const { gql } = require('apollo-server');

const Author = gql`
    type Author {
        id: Int!
        author: String
        books: [Book]
    }
    type Book {
        id: Int!
        author: Author
        title: String
    }
    type Query {
        author(id: Int!): Author
        books: [Book]
    }
`;


module.exports = {
    Author
};
