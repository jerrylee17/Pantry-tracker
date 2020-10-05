const { gql } = require('apollo-server');
const linkSchema = gql`
    type Links {
        id: Int!
        description: String
        url: String!
    }
    type Query {
        link(id: Int!): Links
        links: [Links]
    }
`;

module.exports = {
    linkSchema
};
