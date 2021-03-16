import GET_PERSONAL_DATA from '../graphql/queries/GET_PERSONAL_DATA';
import {getByEmail} from '../services/queries';

export const getPersonalData = async () => {
  try {
    return await getByEmail(GET_PERSONAL_DATA);
  } catch (error) {
    throw `ERRO AO PEGAR DADOS DO FUNCIONARIO${error}`;
  }
};
