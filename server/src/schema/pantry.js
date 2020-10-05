const { Pantry, PantryTC } = require('../../model/pantry');

const pantryQuery = {
    pantryById: PantryTC.getResolver('findById'),
    pantryByIds: PantryTC.getResolver('findByIds'),
    pantryOne: PantryTC.getResolver('findOne'),
    pantryMany: PantryTC.getResolver('findMany'),
    pantryCount: PantryTC.getResolver('count'),
    pantryConnection: PantryTC.getResolver('connection'),
    pantryPagination: PantryTC.getResolver('pagination'),
};

const pantryMutation = {
    pantryCreateOne: PantryTC.getResolver('createOne'),
    pantryCreateMany: PantryTC.getResolver('createMany'),
    pantryUpdateById: PantryTC.getResolver('updateById'),
    pantryUpdateOne: PantryTC.getResolver('updateOne'),
    pantryUpdateMany: PantryTC.getResolver('updateMany'),
    pantryRemoveById: PantryTC.getResolver('removeById'),
    pantryRemoveOne: PantryTC.getResolver('removeOne'),
    pantryRemoveMany: PantryTC.getResolver('removeMany'),
};

module.exports = {
    pantryQuery,
    pantryMutation
}

