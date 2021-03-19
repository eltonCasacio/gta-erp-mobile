import {withQueryVariable, withMutationVariable} from './queries';
import {FormatDate, FormatTime} from '../utils/formatDate';
import {DocumentNode} from 'graphql';

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

export const createRegisterHoursService = async (
  apontamentos = [],
  query: DocumentNode
) => {
  let tipo = 'ENTRADA';
  if (apontamentos[0]) {
    tipo = apontamentos[0].tipo === 'ENTRADA' ? 'SAIDA' : 'ENTRADA';
  }

  try {
    const data = await withMutationVariable({
      mutation: query,
      variables: generateVariables(17, tipo),
    });

    const {apontamento} = data.createApontamento;

    return apontamento;
  } catch (error) {
    saveOnLocalDatabase(apontamentos, generateVariables(17, tipo));
  }
};

const saveOnLocalDatabase = (apontamentos = [], typeDateHour = {}) => {
  console.log('SALVANDO BD LOCAL::', typeDateHour, apontamentos);
};

const generateVariables = (id: Number, tipo = 'ENTRADA') => {
  const ID = id;
  return {
    tipo,
    date: FormatDate(new Date()),
    hour: FormatTime(),
    ID,
  };
};
