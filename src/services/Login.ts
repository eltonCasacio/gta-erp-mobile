import client from '../graphql/client';
import GET_ADDRESSES from '../graphql/queries/getAddresses';

export const Auth = async () => {
  console.log('Autenticando...');
  client.query({query: GET_ADDRESSES}).then(({data}) => {
    console.log(data);
  });
  return true;
};
