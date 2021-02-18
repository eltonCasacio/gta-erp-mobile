import client from '../graphql/client';
// import GET_ADDRESSES from '../graphql/queries/getAddresses';
import AUTHORIZATION from '../graphql/queries/authorization';

export const Auth = async () => {
  console.log('Autenticando...');

  // client.query({query: GET_ADDRESSES}).then(({data}) => {
  //   console.log('??????', data);
  // });

  client
    .mutate({
      mutation: AUTHORIZATION,
    })
    .then(({data}) => {
      console.log(data.login.jwt);
    })
    .catch((err) => console.error(err));

  return true;
};
