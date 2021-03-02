import client from '../graphql/client';
import GET_REGISTER_HOURS from '../graphql/queries/GET_REGISTER_HOURS';

export const getRegisterHours = async (user: String, numberOfRegisters = 0) => {
  try {
    console.log('Register hour::', user, numberOfRegisters);
    const {data} = await client.query({
      query: GET_REGISTER_HOURS,
      variables: {
        user,
        limit: numberOfRegisters,
      },
    });

    console.log('Register DATA::', data);
    return data;
  } catch (error) {
    throw error;
  }
};
