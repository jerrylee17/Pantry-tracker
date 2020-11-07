const { Contents, ContentsTC } = require('./contents');
const { Pantry, PantryTC } = require('./pantry');
const { User, UserTC } = require('./user');
const { UserPantries, UserPantriesTC } = require('./userPantries');
const { PantryContents, PantryContentsTC } = require('./pantryContents');


// our current mongoose schema saves the relations (1-1, 1-N, M-N) between
// different entities by saving their object id so we can reference them later
//
//     i.e.
//     User {
//         name
//         username
//         password
//         email
//         pantries [ PantryObjectIDs... ]
//     }
//
// this is a problem because we're using graphql, we can't use the .populate()
// function that monggoose supports for this problem that we might if we were
// using a REST API setup so we need to load the data and then populate it with
// the id's as done below

UserPantriesTC.addRelation(
  'owner',
  {
    resolver: () => UserTC.mongooseResolvers.dataLoader(),
    prepareArgs: {
      _id: source => source.owner || '',
    },
    projection: { owner: true }
  }
);

UserPantriesTC.addRelation(
  'pantries',
  {
    resolver: () => PantryTC.mongooseResolvers.dataLoaderMany(),
    prepareArgs: {
      _ids: source => source.pantries || [],
    },
    projection: { pantries: true }
  }
);

PantryContentsTC.addRelation(
  'pantry',
  {
    resolver: () => PantryTC.mongooseResolvers.dataLoader(),
    prepareArgs: {
      _id: (source) => source.pantry || '',
    },
    projection: { pantry: true }
  }
);

PantryContentsTC.addRelation(
  'contents',
  {
    resolver: () => ContentsTC.mongooseResolvers.dataLoaderMany(),
    prepareArgs: {
      _ids: (source) => source.contents || [],
    },
    projection: { contents: true }
  }
);



module.exports = {
  User,
  UserTC,
  Pantry,
  PantryTC,
  Contents,
  ContentsTC,
  UserPantries,
  UserPantriesTC,
  PantryContents,
  PantryContentsTC,
};
