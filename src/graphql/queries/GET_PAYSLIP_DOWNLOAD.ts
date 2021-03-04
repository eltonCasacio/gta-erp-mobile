import {gql} from '@apollo/client';

const GET_PAYSLIP_DOWNLOAD = gql`
  query GET_PAYSLIPDOWNLOAD($email: String) {
    payslips(where: {funcionario: {email: $email}}) {
      paymentType
      startDate
      endDate
      paymentDate
      holerite {
        name
        alternativeText
        url
      }
    }
  }
`;

export default GET_PAYSLIP_DOWNLOAD;
