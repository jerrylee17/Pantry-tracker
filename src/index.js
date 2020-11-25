import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// this link is a link to our graphql api, it creates the connection for the
// frontend to our backend api
const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  credentials: 'include'
});

function App() {
  return (
    <div className='index'>
      <Routing />
    </div>
  );
}

// we render our application after wrapping it with apollo
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
