const { jwt } = require('jsonwebtoken');
const { AuthenticationError, UserInputError } = require('apollo-server');

const userSchema = gql`
    type User {
        user_id: Int!
        username: String!
        email: String
        password: String
        first_name: String
        last_name: String
        date_created: String!
    }
`;