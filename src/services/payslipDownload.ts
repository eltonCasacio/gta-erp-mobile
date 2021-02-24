import client from '../graphql/client';
import GET_PAYSLIP_DOWNLOAD from '../graphql/queries/GET_PAYSLIP_DOWNLOAD';

export const getPayslipDownload = async () => {
  console.log('GET_PAYSLIP_DOWNLOAD...');
  try {
    const {data} = await client.query({query: GET_PAYSLIP_DOWNLOAD});
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
