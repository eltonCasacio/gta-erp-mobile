import client from '../graphql/client';
import {DocumentNode} from 'graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getByEmail = async (query: any) => {
  console.log('GET_DATA BY EMAIL');
  const email = await AsyncStorage.getItem('user');

  try {
    const {data} = await client.query({
      query,
      variables: {email},
    });
    return data;
  } catch (error) {
    throw error;
  }
};

type QueryProps = {
  query: DocumentNode;
  variables: {};
};
export const getWithQueryVariable = async ({query, variables}: QueryProps) => {
  try {
    const {data} = await client.query({
      query,
      variables,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
