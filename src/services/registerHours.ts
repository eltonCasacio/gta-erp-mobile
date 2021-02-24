import client from '../graphql/client';
import GET_REGISTER_HOURS from '../graphql/queries/GET_REGISTER_HOURS';

export const getRegisterHours = async () => {
  console.log('REGISTER HOURS...');
  try {
    return await client.query({query: GET_REGISTER_HOURS});
  } catch (error) {
    throw error;
  }
};
