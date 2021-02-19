import client from '../graphql/client';
import GET_ADDRESSES from '../graphql/queries/getAddresses';
import AUTHORIZATION from '../graphql/queries/authorization';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const auth = async () => {
  console.log('Autenticando...');

  try {
    const {data} = await client.mutate({mutation: AUTHORIZATION});
    AsyncStorage.setItem('token', data.login.jwt);
    console.log('TOKEN GERADO', data.login.jwt);
  } catch (error) {
    return false;
  }

  return true;
};

export const getDataTest = async () => {
  console.log('GET ADDRESSES...');

  client.query({query: GET_ADDRESSES}).then(({data}) => {
    console.log('getDataTest', data);
  });
};
