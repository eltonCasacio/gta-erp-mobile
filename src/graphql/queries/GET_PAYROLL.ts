import {gql} from '@apollo/client';

const GET_PAYROLL = gql`
  query GET_PAYROLL {
    employees(where: {email: "eltoncasacio@hotmail.com"}) {
      apontamentos {
        id
        created_at
        entrada
        saida
      }
    }
  }
`;

export default GET_PAYROLL;
