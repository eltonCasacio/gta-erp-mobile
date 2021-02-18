import {ApolloClient, InMemoryCache} from '@apollo/client';

const instance = new ApolloClient({
  uri: 'https://gta-erp-api.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default instance;
