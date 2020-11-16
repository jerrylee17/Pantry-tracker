import gql from 'graphql-tag';

export const USER_QUERY = gql`
query getUser($userID: MongoID!) {
  userOne(
    filter: {
      _id: $userID
    }
  ){
    _id
    name
    username
    email
  }
}`;

export const USER_PANTRY_QUERY = gql`
query userPantry($userID: MongoID!) {
  userPantriesOne (
    filter: {
      owner:$userID
    }
  ){
    owner {
      username
    }
    pantries {
      name
      _id
    }
  }
}`;

export const PANTRY_CONTENT_QUERY = gql`
query pantryContent($pantryID: MongoID!){
  pantryContentsOne(
    filter: {
      pantry: $pantryID
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
}`;





