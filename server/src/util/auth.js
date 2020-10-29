// setting this up for authentication later
const jwt = require('jsonwebtoken');
require('dotenv').config();

function getUserID(context) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userID } = jwt.verify(token, process.env.APP_SECRET);
    return userID;
  }

  throw new Error('User not authenticated');
}

module.exports = {
  getUserID
};
