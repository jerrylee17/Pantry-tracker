const { gql, request } = require('graphql-request');
const { ApiResponse } = require('./ApiResponse');

// Returns current use ID
async function currentUser() {
  let token = window.localStorage.getItem('jwt');
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload).userID;
}

function isAuthenticated() {
  let token = '';
  if (window.localStorage) {
    if (
      window.localStorage.getItem('jwt') &&
      window.localStorage.getItem('jwt-expire') > Date.now()
    ) {
      token = window.localStorage.getItem('jwt');
    }
  }
  return token;
}

async function login(data) {
  const {
    username,
    password
  } = data;
  const LOGIN_QUERY = gql`
  {
    login(
      username:"${username}",
      password:"${password}"
    ) {
      userID,
      token,
      tokenExpiration
    }
  }`;
  let response = new ApiResponse();
  await request('http://localhost:4000/graphql', LOGIN_QUERY)
    .then((data) => {
      response.responseData = data.login;
      response.error = false;
    })
    .catch((err) => {
      response.error = true;
    });
  if (!response.responseData) {
    response.error = true;
    return response;
  }
  window.localStorage.setItem('jwt',
    response.responseData.token);
  window.localStorage.setItem('jwt-expire',
    Date.now() + response.responseData.tokenExpiration * 60 * 60 * 1000);
  window.location.reload();
  return response;
}

async function register(data) {
  const {
    name,
    username,
    password,
    email
  } = data;
  const REGISTER_MUTATION = gql`
  mutation {
    register(
      name: "${name}",
      username:"${username}",
      password:"${password}",
      email:"${email}"
    ) {
      name
      username
      password
      email
    }
  }
  `;
  let response = new ApiResponse();
  await request('http://localhost:4000/graphql', REGISTER_MUTATION)
    .then((data) => {
      response.responseData = data.register;
      response.error = false;
    })
    .catch((err) => {
      response.error = true;
    });
  return response;
}

module.exports = {
  login,
  register,
  isAuthenticated,
  currentUser
};
