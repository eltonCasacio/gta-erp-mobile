import {
  GET_REGISTER_HOURS,
  CREATE_REGISTERHOURS,
} from '../graphql/queries/GET_REGISTER_HOURS';
import {withQueryVariable, withMutationVariable} from '../services/queries';
import {FormatDate, FormatTime} from '../utils/formatDate';

enum TypeRegister {
  'ENTRADA',
  'SAIDA',
}

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
  const num = 1;
  const ID = 17;

  try {
    return await withMutationVariable({
      mutation: CREATE_REGISTERHOURS,
      variables: {
        tipo: TypeRegister[num],
        date: FormatDate(new Date()),
        hour: FormatTime(),
        ID,
      },
    });
  } catch (error) {
    throw error;
  }
};
