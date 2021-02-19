import client from '../graphql/client';
import GET_ADDRESSES from '../graphql/queries/getAddresses';
import AUTHORIZATION from '../graphql/queries/authorization';

export const auth = async () => {
  console.log('Autenticando...');

  client
    .mutate({
      mutation: AUTHORIZATION,
    })
    .then(({data}) => {
      console.log(data.login.jwt);
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

export const getDataTest = async () => {
  client.query({query: GET_ADDRESSES}).then(({data}) => {
    console.log('getDataTest', data);
  });
};
