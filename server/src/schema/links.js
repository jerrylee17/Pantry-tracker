const { gql } = require('apollo-server');
const linkSchema = gql`
    type Links {
        id: ID!
        description: String!
        url: String!
    }
`;


module.exports = {
    linkSchema
};
