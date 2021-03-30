import {gql} from '@apollo/client';

export const GET_PAYSLIP_DOWNLOAD = gql`
  query GET_PAYSLIPDOWNLOAD($user: String) {
    payslips(
      where: {funcionario: {users_permissions_user: {username: $user}}}
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

export const GET_PAYSLIP_DOWNLOAD_BETWEEM_DATE = gql`
  query GET_PAYSLIP_DOWNLOAD_BETWEEM_DATE(
    $user: String!
    $dateStart: String!
    $dateEnd: String!
  ) {
    payslips(
      where: {
        funcionario: {users_permissions_user: {username: $user}}
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
  query GET_PAYSLIP_YEARS($user: String!) {
    payslips(
      where: {funcionario: {users_permissions_user: {username: $user}}}
    ) {
      paymentDate
    }
  }
`;
