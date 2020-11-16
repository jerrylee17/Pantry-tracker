import gql from 'graphql-tag';

export const REGISTER_MUTATION = (name, username, password, email) => (gql`
mutation deleteUser($userID: MongoID!) {
  userRemoveOne (filter: {userID: $userID}) {
    recordId
    record {
      name
      username
      password
      email
    }
  }
}
`)
