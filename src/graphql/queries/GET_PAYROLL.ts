import {gql} from '@apollo/client';

export const GET_PAYROLL = gql`
  query GET_PAYROLL($user: String!, $date: String!) {
    apontamentos(
      where: {funcionario: {email: $user}, registerDate_gte: $date}
    ) {
      registerDate
      registerHour
      tipo
    }
  }
`;

export const GET_PAYROLL_BETWEEM_DATE = gql`
  query GET_PAYROLL_BETWEEM_DATE(
    $user: String!
    $dateStart: String!
    $dateEnd: String!
  ) {
    apontamentos(
      where: {
        funcionario: {email: $user}
        registerDate_gte: $dateStart
        registerDate_lt: $dateEnd
      }
    ) {
      registerDate
      registerHour
      tipo
    }
  }
`;
