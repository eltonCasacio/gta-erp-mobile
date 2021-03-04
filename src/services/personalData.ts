import client from '../graphql/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GET_PERSONAL_DATA from '../graphql/queries/GET_PERSONAL_DATA';

export const getPersonalData = async () => {
  console.log('GET_PERSONAL_DATA...');
  const user = await AsyncStorage.getItem('user');
  try {
    const {data} = await client.query({
      query: GET_PERSONAL_DATA,
      variables: {email: user},
    });
    return data;
  } catch (error) {
    throw error;
  }
};
