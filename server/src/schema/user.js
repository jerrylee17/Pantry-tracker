const { Pantry } = require('../../model/pantry');
const { PantryContents } = require('../../model/pantryContents');
const { UserTC } = require('../../model/preloader');
const { User } = require('../../model/user');
const { UserPantries } = require('../../model/userPantries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const UserQuery = {
  userMany: UserTC.mongooseResolvers.findMany(),
  userCount: UserTC.mongooseResolvers.count(),
  userOne: UserTC.mongooseResolvers.findOne(),
  login: {
    type: `AuthData`,
    args: {
      username: 'String!',
      password: 'String!'
    },
    resolve: async (source, { username, password }) => {
      const user = await User.findOne({ username: username });
      // user doesn't exist
      if (!user) return null
      const loggedIn = await bcrypt.compare(password, user.password)
      // Password incorrect
      if (!loggedIn) return null

      // Log user in
      const token = jwt.sign({
        userID: user.id,
        username: user.username,
        email: user.email
      },
        'averysupersecretkey',
        { expiresIn: '1h' }
      )
      return {
        userID: user.id,
        token: token,
        tokenExpiration: 1
      }
    },
  }
};

const UserMutation = {
  userCreateOne: UserTC.mongooseResolvers.createOne(),
  userUpdateOne: UserTC.mongooseResolvers.updateOne(),
  userUpdateMany: UserTC.mongooseResolvers.updateMany(),
  userRemoveOne: UserTC.mongooseResolvers.removeOne(),
  register: {
    type: UserTC,
    args: {
      name: 'String!',
      username: 'String!',
      password: 'String!',
      email: 'String!',
    },
    resolve: async (source, { name, username, password, email }) => {
      // see if user exiists
      const existingUser = await User.findOne({
        $or: [{ username }, { email }]
      })
      if (existingUser) {
        // User already created
        console.log('Existing')
        return null
      }
      const hashedPassword = await bcrypt.hash(password, 12)
      const newUser = await User.create(
        {
          name,
          username,
          password: hashedPassword,
          email
        }
      )
      console.log(newUser);

      return newUser;
    }
  },
};

module.exports = {
  UserQuery,
  UserMutation,
};
