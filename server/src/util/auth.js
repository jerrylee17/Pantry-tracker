const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
require('dotenv').config();

router.post('/register', async (req, res) => {

});


// function getUserID(context) {
//   const Authorization = context.request.get('Authorization');
//   if (Authorization) {
//     const token = Authorization.replace('Bearer ', '');
//     const { userID } = jwt.verify(token, process.env.APP_SECRET);
//     return userID;
//   }

//   throw new Error('User not authenticated');
// }

module.exports = router;
