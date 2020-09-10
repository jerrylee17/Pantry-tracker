const Author = `
    type Author {
        id: Int!
        author: String
        books: [Book]
    }
    type Book {
        title: String
        author: String
    }
`;

const authors = [
    {
        id: 0,
        author: 'J.K. Rowling',
        books: [
            'Harry Potter and the Something',
            'Lordie and the chamber of secrets'
        ]
    },
    {
        id: 1,
        author: 'George M. Frost',
        books: [
            'The Zombie Knight',
            'Not the Zombie Knight'
        ]
    }
];

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

const authorResolvers = {
    Author : {
        authors: authors,
    }
};

module.exports = {
    Author,
    authorResolvers
};
