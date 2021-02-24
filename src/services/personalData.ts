import client from '../graphql/client';
import GET_PERSONAL_DATA from '../graphql/queries/GET_PERSONAL_DATA';

export const getPersonalData = async () => {
  console.log('GET_PERSONAL_DATA...');
  try {
    const {data} = await client.query({query: GET_PERSONAL_DATA});
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
