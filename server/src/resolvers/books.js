const { find, filter } = require('lodash');
const authors = [
    {
        id: 0,
        author: 'J.K. Rowling',
    },
    {
        id: 1,
        author: 'George M. Frost',
    }
];

const books = [
    {
        id: 1,
        authorId: 0,
        title: 'Harry Potter and the something somethign',
    },
    {
        id: 2,
        authorId: 0,
        title: 'Lordie and the chamber of secrets',
    },
    {
        id: 3,
        authorId: 1,
        title: 'The Zombie Knight',
        
    },
    {
        id: 4,
        authorId: 1,
        title: 'Not the Zombie Knight'
    }
];

const authorResolvers = {
    Query: {
        author : (_, { id }) => find(authors, { id }),
        books : () => books
    },
    Author: {
        books: (author) => filter(books, { authorId: author.id })
    },
    Book : {
        author: (book) => find(authors, { id : book.authorId })
    },
};

module.exports = { authorResolvers };
