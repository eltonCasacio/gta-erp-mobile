import {
  GET_REGISTER_HOURS,
  CREATE_REGISTERHOURS,
} from '../graphql/queries/GET_REGISTER_HOURS';
import {withQueryVariable, withMutationVariable} from '../services/queries';

export const getRegisterHours = async (user: String, numberOfRegisters = 0) => {
  try {
    return await withQueryVariable({
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

export const createRegisterHours = async () => {
  try {
    return await withMutationVariable({
      mutation: CREATE_REGISTERHOURS,
    });
  } catch (error) {
    throw error;
  }
};
