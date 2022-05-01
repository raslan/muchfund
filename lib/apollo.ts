import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // Countries API for testing
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});
export default client;
