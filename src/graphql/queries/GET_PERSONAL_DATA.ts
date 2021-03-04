import {gql} from '@apollo/client';

const GET_PERSONAL_DATA = gql`
  query GET_DATA_EMPLOYEE($email: String) {
    employees(where: {email: $email}) {
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
