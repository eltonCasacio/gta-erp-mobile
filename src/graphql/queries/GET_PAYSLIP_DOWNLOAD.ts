import {gql} from '@apollo/client';

export const GET_PAYSLIP_DOWNLOAD = gql`
  query GET_PAYSLIPDOWNLOAD($email: String) {
    payslips(where: {funcionario: {email: $email}}) {
      paymentType
      paymentDate
      holerite {
        name
        alternativeText
        url
      }
    }
  }
`;

export const GET_PAYSLIP_DOWNLOAD_BETWEEM_DATE = gql`
  query GET_PAYSLIP_DOWNLOAD_BETWEEM_DATE(
    $email: String!
    $dateStart: String!
    $dateEnd: String!
  ) {
    payslips(
      where: {
        funcionario: {email: $email}
        paymentDate_gte: $dateStart
        paymentDate_lt: $dateEnd
      }
    ) {
      paymentType
      paymentDate
      holerite {
        name
        alternativeText
        url
      }
    }
  }
`;

export const GET_PAYSLIP_YEARS = gql`
  query GET_PAYSLIP_YEARS($email: String!) {
    payslips(where: {funcionario: {email: $email}}) {
      paymentDate
    }
  }
`;
