import {gql} from '@apollo/client';

const GET_PAYROLL = gql`
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

export default GET_PAYROLL;
