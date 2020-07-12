'use strict';

const express = require('express');
const router = express.Router();

const User = require('../Models/UserDB.js')

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.post('/register', async (req, res) => {
    console.log(req.body);
    const userToRegister = req.body;
    console.log('haha all your information is ours');
    res.send({ message: 'haha thanks for your information xddddd' });
    // if (userToRegister.email && userToRegister.password && userToRegister.username) {
    //     const newUser = new User({
    //         username: userToRegister.username,
    //         firstName: userToRegister.firstname,
    //         lastName: userToRegister.lastName,
    //         password: userToRegister.password,
    //         email: userToRegister.email
    //     });
    //     console.log('nice we made it here');
    //     // await newUser.save()
    //     //   .catch(error => {
    //     //       console.log(error);
    //     //       res.status("CONFLICT").send({ message: error });
    //     //   })
    //     //   .then(_ => {
    //     //       console.log('sucess');
    //     //       res.status('SUCCESS').send({ message: 'Account creation successful' });
    //     //   })
    // } else {
    //     res.sendStatus({ message: 'Missing email, username, and/or password.' });
    // }
});

// router.post('/login', function (req, res) {
//     const loginUser = req.body;
//     if (!loginUser.password || !loginUser.username) {
//         return res.status('BAD REQUEST').send({ message: 'Bad Request.' });
//     }
//     if ()
// })
// this file and others in this folder will be responsible for
// handling api responses from our website
// things like the usersigning up for something

module.exports = router;
