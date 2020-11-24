const { gql, request } = require('graphql-request');
const { ApiResponse } = require('./ApiResponse');
const bcrypt = require('bcryptjs');

// Returns current use ID
export async function currentUser() {
  let token = window.localStorage.getItem('jwt');
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  let user = JSON.parse(jsonPayload).userID;
  return user;
}

export function isAuthenticated() {
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

export async function login(data) {
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

export async function register(data) {
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
  // Create user
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

export async function updateAccount(data) {
  const {
    userID,
    name,
    username,
    email,
    passwordInfo
  } = data;
  const {
    newPassword,
    changePassword
  } = passwordInfo;
  let password;
  if (changePassword) {
    // hash password
    password = await bcrypt.hash(newPassword, 12);
  } else {
    password = newPassword;
  }
  const UPDATE_USER = gql`
  mutation {
    userUpdateOne(
      filter:{_id:"${userID}"},
      record:{
        name:"${name}",
        username:"${username}",
        email:"${email}",
        ${changePassword ? `password:"${password}"` : ''}
      }
    ) {
      recordId
      record {
        name
        username
        email
      }
    }
  }`;
  let response = new ApiResponse();
  await request('http://localhost:4000/graphql', UPDATE_USER)
    .then((data) => {
      response.responseData = data.register;
      response.error = false;
    })
    .catch((err) => {
      response.error = true;
    });
  return response;
}

export async function deleteAccount(data) {
  const {
    userID
  } = data;
  const DELETE_ACCOUNT = gql`
  mutation{
    userRemoveOne (filter: {userID: "${userID}") {
      recordId
      record {
        name
        username
        email
      }
    }
  }
  `;
  let response = new ApiResponse();
  await request('http://localhost:4000/graphql', DELETE_ACCOUNT)
    .then((data) => {
      response.responseData = data.register;
      response.error = false;
    })
    .catch((err) => {
      response.error = true;
    });
  return response;
}
