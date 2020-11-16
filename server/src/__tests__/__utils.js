// const { ApolloServer } = require('apollo-server-express');
// const express = require('express');
// const { HttpLink } = require('apollo-link-http');
// const fetch = require('node-fetch');
// const { execute, toPromise } = require('apollo-link');
// const cors = require('cors');
// const { schema } = require('../src/schema/index.js');

// // { context = defaultContext } = {} thrwo this in the () when we setup
// // a context for our application :(

// const constructTestServer = () => {
//     const server = new ApolloServer({
//         schema,
//         playground: true,
//         introspection: true,
//     });
    
//     return { server };
// };

// const startTestServer = async () => {
//     const server = new ApolloServer({
//         schema,
//         playground: true,
//         introspection: true,
//     });

//     const app = express();
//     app.use(cors());
//     server.applyMiddleware({ app });
//     const httpServer = await app.listen({ port: 4000 });

//     const link = new HttpLink({
//         uri: `http://localhost:4000${server.graphqlPath}`,
//         fetch: fetch,
//     });
//     console.log('here');
//     const executeOperation = ({ query, variables = {} }) =>
//         execute(link, { query, variables });

    
//     return {
//         link,
//         stop: () => httpServer.close(),
//         graphql: executeOperation,
//     };
// };

// module.exports = {
//     toPromise,
//     constructTestServer,
//     startTestServer,
// }


// /*
// const gql = require('graphql-tag');
// const { constructTestServer, startTestServer, toPromise } = require('./__utils');
// const { schema } = require('../src/schema/index.js');
// const { attachDirectiveResolvers } = require('apollo-server');

// const GET_ALL_USERS_QUERY = gql`
//     query abc {
//         pantryMany {
//             name
//         }
//     }
// `;

// describe('e2e test', () => {
//     let stop, graphql;

//     beforeEach(async () => {
//         // const server = await constructTestServer('');
//         const testServer = await startTestServer();
//         stop = testServer.stop;
//         graphql = testServer.graphql;
//     });
    
//     afterEach(() => stop());

//     it('gets all pantries', async () => {
//         // const res = await toPromise(
//         //     graphql({ query: GET_ALL_USERS_QUERY }),
//         // );
//         // const res = await resolvers.Query.pantryMany({});
//         // console.log(res);
//         expect(2).toBe(2);
//     });
// })

// */
