import client from '../graphql/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GET_PAYROLL from '../graphql/queries/GET_PAYROLL';

import {FormatDate} from '../utils/formatDate';

export const getPayroll = async () => {
  const user = await AsyncStorage.getItem('user');
  const date = await FormatDate(new Date());

  try {
    const {data} = await client.query({
      query: GET_PAYROLL,
      variables: {
        user,
        date,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const removeDuplicate = async (registers = []) => {
  const dates = registers.map(({registerDateHour}) =>
    String(registerDateHour).slice(0, 7)
  );

  let newList = [''];
  dates.forEach((current) => {
    if (newList.indexOf(current) < 0) {
      newList.push(current);
    }
  });

  newList.shift();

  return newList;
};
