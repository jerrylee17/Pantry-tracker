import gql from 'graphql-tag'

export const USER_QUERY = gql`
query getUser {
  userMany {
    name
    username
    email
    pantries {
      name
      contents {
        name
        count
      }
    }
  }
}
`
