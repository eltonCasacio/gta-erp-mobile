import client from '../graphql/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GET_PAYROLL from '../graphql/queries/GET_PAYROLL';

export const getPayroll = async () => {
  const user = await AsyncStorage.getItem('user');
  const fullDateTime = new Date();

  let dia = String(fullDateTime.getDate());
  dia = Number(dia) < 10 ? '0' + dia : dia;

  let mes = String(fullDateTime.getMonth() + 1);
  mes = Number(mes) < 10 ? '0' + mes : mes;

  const ano = String(fullDateTime.getFullYear());
  const date = ano.concat('-', mes, '-', dia);

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
    console.error(error);
  }
};
