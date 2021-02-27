import client from '../graphql/client';
import GET_PAYROLL from '../graphql/queries/GET_PAYROLL';

export const getPayroll = async () => {
  console.log('GET_PAYROLL...');
  try {
    const {data} = await client.query({query: GET_PAYROLL});
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
