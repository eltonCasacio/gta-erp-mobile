import client from '../graphql/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AUTHORIZATION from '../graphql/queries/AUTHORIZATION';

export const auth = async (user: string, password: string) => {
  console.log('Autenticando...', user);

  await AsyncStorage.removeItem('token');

  try {
    const {data} = await client.mutate({
      mutation: AUTHORIZATION,
      variables: {
        user,
        password,
      },
    });
    AsyncStorage.setItem('token', data.login.jwt);

    return data;
  } catch (error) {
    throw error;
  }
};
