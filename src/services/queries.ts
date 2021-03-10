import client from '../graphql/client';
import {DocumentNode} from 'graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';

type QueryProps = {
  query: DocumentNode;
  variables: {};
};

type MutationProps = {
  mutation: DocumentNode;
};

export const getByEmail = async (query: any) => {
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

export const withQueryVariable = async ({query, variables}: QueryProps) => {
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

export const withMutationVariable = async ({mutation}: MutationProps) => {
  try {
    const {data} = await client.mutate({
      mutation,
      variables: {
        tipo: 'ENTRADA',
        date: '2021-03-24',
        hour: '10:00:00.000',
        ID: 16,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
