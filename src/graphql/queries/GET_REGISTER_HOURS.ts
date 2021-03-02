import {gql} from '@apollo/client';

const GET_REGISTERHOURS = gql`
  query GET_REGISTER_HOUR($user: String!, $limit: Int!) {
    apontamentos(
      sort: "registerDateHour:desc"
      limit: $limit
      where: {funcionario: {email: $user}}
    ) {
      registerDateHour
      tipo
      funcionario {
        Nome
      }
    }
  }
`;

export default GET_REGISTERHOURS;
