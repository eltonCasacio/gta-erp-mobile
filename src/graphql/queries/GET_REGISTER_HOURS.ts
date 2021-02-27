import {gql} from '@apollo/client';

const GET_REGISTERHOURS = gql`
  query GET_PERSONAL_DATA {
    employees(where: {email: "eltoncasacio@hotmail.com"}) {
      id
      Nome
      apontamentos {
        id
        entrada
        saida
        created_at
      }
    }
  }
`;

export default GET_REGISTERHOURS;
