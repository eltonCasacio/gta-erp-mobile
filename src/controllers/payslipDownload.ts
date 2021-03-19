import {GET_PAYSLIP_DOWNLOAD} from '../graphql/queries/GET_PAYSLIP_DOWNLOAD';
import {getByEmail} from '../services/queries';

export const getPayslipDownload = async () => {
  try {
    return await getByEmail(GET_PAYSLIP_DOWNLOAD);
  } catch (error) {
    throw `ERRO AO PEGAR HOLERITES${error}`;
  }
};
