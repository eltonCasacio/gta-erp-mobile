import AsyncStorage from '@react-native-async-storage/async-storage';
import {GET_PAYROLL} from '../graphql/queries/GET_PAYROLL';
import {withQueryVariable} from '../services/queries';

import {FormatDate} from '../utils/formatDate';

export const getPayroll = async () => {
  const user = await AsyncStorage.getItem('user');
  const date = FormatDate(new Date());

  try {
    return await withQueryVariable({
      query: GET_PAYROLL,
      variables: {
        user,
        date: date.slice(0, 7),
      },
    });
  } catch (error) {
    throw `ERRO AO PEGAR APONTAMENTOS - RELATÓRIO${error}`;
  }
};

export const removeDuplicate = async (registers = []) => {
  const dates = registers.map(({registerDate}) => registerDate);
  let newList = [''];
  dates.forEach((current) => {
    if (newList.indexOf(current) < 0) {
      newList.push(current);
    }
  });

  newList.shift();

  return newList;
};

export const groupHours = (
  dateRegister: string,
  apontamentos = []
): string[] => {
  let hours = [''];

  apontamentos.forEach(({registerDate, registerHour, tipo}) => {
    const onlyDate = String(registerDate);
    const currentDate = dateRegister;

    if (onlyDate === currentDate) {
      hours.push(`${tipo}-${registerHour}`);
    }
  });

  hours.shift();

  return hours;
};
