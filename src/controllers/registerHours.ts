import GET_REGISTER_HOURS from '../graphql/queries/GET_REGISTER_HOURS';
import {getWithQueryVariable} from '../services/queries';

export const getRegisterHours = async (user: String, numberOfRegisters = 0) => {
  try {
    return await getWithQueryVariable({
      query: GET_REGISTER_HOURS,
      variables: {
        user,
        limit: numberOfRegisters,
      },
    });
  } catch (error) {
    throw error;
  }
};
