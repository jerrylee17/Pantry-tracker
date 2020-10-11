const { Contents, ContentsTC } = require('./contents');
const { Pantry, PantryTC } = require('./pantry')
const { User, UserTC } = require('./user');

UserTC.addRelation(
    'pantries',
    {
        resolver: () => PantryTC.mongooseResolvers.dataLoaderMany(),
        prepareArgs: {
            _ids: source => source.pantries || [],
        },
        projection: { pantries: true }
    }
);

ContentsTC.addRelation(
    'pantry',
    {
        resolver: () => PantryTC.mongooseResolvers.dataLoader(),
        prepareArgs: {
            _id: (source) => source.pantry || "",
        },
        projection: { pantry: true }
    }
);

// console.log(PantryTC);
PantryTC.addRelation(
    'owner',
    {
        resolver: () => UserTC.mongooseResolvers.dataLoaderMany(),
        prepareArgs: {
            _ids: source => source.owner || [],
        },
        projection: { owner: true }
    }
);

PantryTC.addRelation(
    'contents',
    {
        resolver: () => ContentsTC.mongooseResolvers.dataLoaderMany(),
        prepareArgs: {
            _ids: source => source.contents || [],
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
};
