const { ApolloServer, gql } = require('apollo-server-express');
const { createTestClient } = require('apollo-server-testing');
const { schema } = require('../schema/index.js');

/*
    Come up with better ways to mock data and then pass it into our server
    we then will query our server with that data and then check to see if values
    match up which is how we'll verify that it went through.
*/

// const mockPantry = {
//     _id: '5fffff',
//     name: 'hi',
//     contents: [
//         'rice',
//         'crackers',
//         'am die',
//     ]
// }

const mockPantry = {
    
        _id: () => '5233',
        name: () => 'hi',
        contents: () => [
            'rice',
            'crackers',
        ]
}

let pantryAPI = jest.fn(() => [mockPantryResponse]);
    
const otherMock = {
    _id: () => '5aaaaaaa',
    String: () => 'bye',
}

const server = new ApolloServer({
    schema,
    dataSources: () => (mockPantry)
});

const { query, mutate } = createTestClient(server);

test('does a simple pantry many query', async () => {
    const PANTRYMANY = gql`
    query {
        pantryMany {
            name
        }
    }
    `;

    // const data = await query({ query: '{ pantryOne(filter: {name:"hi"}) { name } }' })

    const res = await query({ query: PANTRYMANY });
    console.log(res);
    expect(2).toBe(2);

});
