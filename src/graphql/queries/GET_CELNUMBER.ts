import {gql} from '@apollo/client';

const GET_CELNUMBER = gql`
  query GET_CELNUMBER {
    configuracoes {
      Celular
    }
  }
`;

export default GET_CELNUMBER;
