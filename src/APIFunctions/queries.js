import gql from 'graphql-tag';

export const USER_QUERY = (userID) => (gql`
query getUser {
  userOne(
    filter: {
      _id: ${userID}
    }
  ) {
    name
    username
    email
  }
}`);

export const PANTRY_CONTENT_QUERY = (pantryID) => (gql`
query pantryContent{
  pantryContentsOne(
    filter: {
      pantry: ${pantryID}
    }
  ){
    pantry {
      name
    }
    contents {
      name
      count
    }
  }
}`);

export const USER_PANTRY_QUERY = (userID) => (gql`
query userPantry {
  userPantriesOne (
    filter: {owner:${userID}}
  ){
    owner {
      username
    }
    pantries {
      name
      _id
    }
  }
}`);

