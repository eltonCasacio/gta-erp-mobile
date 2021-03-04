import GET_PAYSLIP_DOWNLOAD from '../graphql/queries/GET_PAYSLIP_DOWNLOAD';
import {getByEmail} from '../services/queries';

export const getPayslipDownload = async () => {
  console.log('GET_PAYSLIP_DOWNLOAD...');
  try {
    return await getByEmail(GET_PAYSLIP_DOWNLOAD);
  } catch (error) {
    throw error;
  }
};
