import client from '../graphql/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GET_PAYROLL from '../graphql/queries/GET_PAYROLL';

import {FormatDate} from '../utils/formatDate';

export const getPayroll = async () => {
  const user = await AsyncStorage.getItem('user');
  const date = FormatDate(new Date());

  try {
    const {data} = await client.query({
      query: GET_PAYROLL,
      variables: {
        user,
        date: date.slice(0, 7),
      },
    });
    return data;
  } catch (error) {
    throw error;
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

  apontamentos.forEach(({registerDate, registerHour}) => {
    const onlyDate = String(registerDate);
    const currentDate = dateRegister;

    if (onlyDate === currentDate) {
      hours.push(registerHour);
    }
  });

  hours.shift();

  return hours;
};
