import {gql} from '@apollo/client';

const GET_PAYSLIP_DOWNLOAD = gql`
  query GET_PAYSLIPDOWNLOAD {
    employees(where: {email: "eltoncasacio@hotmail.com"}) {
      holerites {
        id
        paymentType
        startDate
        endDate
        paymentDate
        holerite {
          name
          url
        }
      }
    }
  }
`;

export default GET_PAYSLIP_DOWNLOAD;
