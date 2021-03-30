import {gql} from '@apollo/client';

const GET_PERSONAL_DATA = gql`
  query GET_DATA_EMPLOYEE($user: String) {
    employees(where: {users_permissions_user: {username: $user}}) {
      id
      Nome
      Admissao
      Celular
      Telefone
      email
      funcoe {
        code
      }
    }
  }
`;

export default GET_PERSONAL_DATA;
