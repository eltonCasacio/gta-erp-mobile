import client from '../graphql/client';
import {DocumentNode} from 'graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';

type QueryProps = {
  query: DocumentNode;
  variables: {};
};

type MutationProps = {
  mutation: DocumentNode;
  variables: {};
};

export const getByUser = async (query: any) => {
  const user = await AsyncStorage.getItem('user');

  try {
    const {data} = await client.query({
      query,
      variables: {user},
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

export const withMutationVariable = async ({
  mutation,
  variables,
}: MutationProps) => {
  try {
    const {data} = await client.mutate({
      mutation,
      variables,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
