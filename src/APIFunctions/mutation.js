import gql from 'graphql-tag';

export const USER_ADD_EXISTING_PANTRY = gql`
mutation ($userID:MongoID!, $pantryID:MongoID!){
  userAddExistingPantry(
    userID:$userID,
    pantryID:$pantryID
  ){
    owner{
      name
      username
    }
    pantries{
      _id
      name
    }
  }
}
`;

export const USER_REMOVE_PANTRY = gql`
mutation ($userID:MongoID!, $pantryID:MongoID!){
  userRemovePantry(
    userID:$userID,
    pantryID:$pantryID
  ){
    owner{
      name
      username
    }
    pantries{
      _id
      name
    }
  }
}
`;

