import client from '../graphql/client';
import GET_REGISTER_HOURS from '../graphql/queries/GET_REGISTER_HOURS';

export const getRegisterHours = async (user: String) => {
  try {
    console.log('Register hour::', user);
    return await client.query({query: GET_REGISTER_HOURS, variables: {user}});
  } catch (error) {
    throw error;
  }
};
