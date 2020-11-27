const { gql, request } = require('graphql-request');
const { ApiResponse } = require('./ApiResponse');

export async function getProfile(data) {
  const {
    userID
  } = data;
  let response = new ApiResponse();
  const USER_QUERY = gql`
  {
    userOne(filter:{_id:"${userID}"}) {
      _id
      name
      username
      email
    }
  }
  `;
  const USER_PANTRY_QUERY = gql`
  {
    userPantriesOne(
      filter: {owner:"${userID}"}
    ) {
      owner {
        name
      }
      pantries {
        name
        _id
      }
    }
  }`;
  await request(`${process.env.REACT_APP_API_URL}/graphql`, USER_QUERY)
    .then((data) => {
      response.responseData = data.userOne;
    })
    .catch((err) => {
      response.error = true;
      return response;
    });
  await request(`${process.env.REACT_APP_API_URL}/graphql`, USER_PANTRY_QUERY)
    .then((data) => {
      response.responseData.pantries = data.userPantriesOne ?
        data.userPantriesOne.pantries : [];
    })
    .catch((err) => {
      response.error = true;
      return response;
    });
  if (!response.responseData.pantries.length) return response;

  const PANTRY_CONTENTS_QUERY = gql`
  {
    pantryContentsMany(
      filter:{OR :[${response.responseData.pantries.map((pantry) => (pantry ?
    `{pantry:"${pantry._id}"}` : ''
  ))}]}
    ) {
      pantry {
        _id
        name
      }
      contents {
        name
        count
      }
    }
  }`;
  await request(`${process.env.REACT_APP_API_URL}/graphql`, PANTRY_CONTENTS_QUERY)
    .then((data) => {
      response.responseData.pantries = data.pantryContentsMany;
    })
    .catch((err) => {
      response.error = true;
      return response;
    });
  return response;
}
