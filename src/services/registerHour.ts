import {withQueryVariable, withMutationVariable} from './queries';
import {FormatDate, FormatTime} from '../utils/formatDate';

enum TypeRegister {
  'ENTRADA',
  'SAIDA',
}

export const getRegisterHourService = async ({
  user,
  numberOfRegisters,
  query,
}: any) => {
  try {
    return await withQueryVariable({
      query,
      variables: {
        user,
        limit: numberOfRegisters,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const createRegisterHoursService = async (apontamentos = [], query) => {
  try {
    const data = await withMutationVariable({
      mutation: query,
      variables: generateTypeDateHour(17),
    });

    const {apontamento} = data.createApontamento;
    const removedFirstItem =
      apontamentos.length >= 4 ? [...apontamentos].slice(1) : apontamentos;

    return [...removedFirstItem, apontamento];
  } catch (error) {
    saveOnLocalDatabase(apontamentos, generateTypeDateHour(17));
  }
};

const saveOnLocalDatabase = (apontamentos, typeDateHour = {}) => {
  console.log('SALVANDO BD LOCAL::', typeDateHour);
};

const generateTypeDateHour = (id: Number) => {
  const num = 1;
  const ID = id;
  return {
    tipo: TypeRegister[num],
    date: FormatDate(new Date()),
    hour: FormatTime(),
    ID,
  };
};
