import {gql} from '@apollo/client';

export const GET_REGISTER_HOURS = gql`
  query GET_REGISTER_HOUR($user: String!, $limit: Int!) {
    apontamentos(
      sort: "created_at:desc"
      limit: $limit
      where: {funcionario: {email: $user}}
    ) {
      registerDate
      registerHour
      tipo
      funcionario {
        Nome
      }
    }
  }
`;

export const CREATE_REGISTERHOURS = gql`
  mutation CREATE_APONTAMENTO(
    $tipo: ENUM_APONTAMENTO_TIPO!
    $date: Date!
    $hour: Time!
    $ID: ID!
  ) {
    createApontamento(
      input: {
        data: {
          tipo: $tipo
          registerDate: $date
          registerHour: $hour
          funcionario: $ID
        }
      }
    ) {
      apontamento {
        tipo
        registerDate
        registerHour
        funcionario {
          id
          Nome
        }
      }
    }
  }
`;
