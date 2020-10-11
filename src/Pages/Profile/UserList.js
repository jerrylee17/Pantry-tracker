// import React, { Component, Fragment } from 'react';
// import Profile from './Profile';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag'


// const INFORMATION_QUERY = gql`
//   query {
//     pantryMany {
//       name
//       contents
//     }
//   }
// `;

// class UserList extends Component {
//     render() {
//         <Query query={INFORMATION_QUERY}>
//             {({ loading, error, data }) => {
//                 if (loading) return <div>Fetching</div>
//                 if (error) return <div>Error</div>

//                 const pantries = data.pantryMany;

//                 return (
//                     <div>
//                         {/* {pantries.map(pantry => <)} */}
//                     </div>
//                 )
//             }}
//         </Query>
//     }
// }