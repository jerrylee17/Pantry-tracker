const { gql, request } = require('graphql-request');
const { ApiResponse } = require('./ApiResponse');
const AWS = require('aws-sdk');

async function callLambda() {
  const lambda = new AWS.Lambda({
    accessKeyId: process.env.REACT_APP_AWS_KEYID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
    region: 'us-west-1'
  })
  const params = {
    FunctionName: "refreshPantry"
  };
  await lambda.invoke(params, function (err, data) {
    if (err) {
      console.log(err);
      return null
    }
    console.log(data);
    return data;
  })
}

export async function refreshPantry(data) {
  const {
    pantryID,
    callback
  } = data;
  // Remove this once refresh is done. 
  // if (pantryID !== "5fb9c3a9c1576ee5ff6a8318") {
  //   return;
  // }
  const result = await callLambda();
  const REFRESH_PANTRY = gql`
  mutation(
    $pantryID: MongoID!
    $contentNames: [String!]
    $contentAmounts: [Int!]
  ) {
    pantryRefresh(
      pantryID: $pantryID
      contentNames: $contentNames
      contentAmounts: $contentAmounts
    ) {
      pantry {
        name
      }
      contents {
        name
        count
      }
    }
  }  
  `;
  let response = new ApiResponse();
  await request(
    `${process.env.REACT_APP_API_URL}/graphql`,
    REFRESH_PANTRY,
    {
      pantryID: pantryID,
      // replace contentNames and contentAmounts
      contentNames: ["Bananas"],
      contentAmounts: [1]
    }
  )
    .then((data) => {
      response.responseData = data.pantryRefresh;
      response.error = false;
    })
    .catch((err) => {
      console.log(err)
      response.error = true;
    });
  callback()
  console.log(response)
  return response
}
