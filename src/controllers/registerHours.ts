import {
  GET_REGISTER_HOURS,
  CREATE_REGISTERHOURS,
} from '../graphql/queries/GET_REGISTER_HOURS';
import {
  getRegisterHourService,
  createRegisterHoursService,
} from '../services/registerHour';

export const getRegisterHours = async (user: String, numberOfRegisters = 0) => {
  try {
    return await getRegisterHourService({
      user,
      numberOfRegisters,
      query: GET_REGISTER_HOURS,
    });
  } catch (error) {
    throw 'ERRO AO PEGAR APONTAMENTOS:::' + error;
  }
};

export const createRegisterHours = async (apontamentos = []) => {
  try {
    return await createRegisterHoursService(apontamentos, CREATE_REGISTERHOURS);
  } catch (error) {
    throw error;
  }
};
