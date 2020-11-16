const { ApolloServer, gql } = require('apollo-server-express');
const { createTestClient } = require('apollo-server-testing');
const { schema } = require('../schema/index.js');

const mocks = {
    _id: () => '5fffff',
    String: () => 'hi',
}

const server = new ApolloServer({
    schema,
    mocks
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
    
    const {
        data: { pantryMany }
    } = await query({ query: PANTRYMANY })

    // const res = await query({ query: QUERY });
    console.log(pantryMany);
    expect(2).toBe(2);

});
