import {gql} from '@apollo/client';

const GET_PERSONAL_DATA = gql`
  query GET_DATA_EMPLOYEE {
    employees(where: {email: "eltoncasacio@hotmail.com"}) {
      id
      Nome
      Nascimento
      Admissao
      RG
      CPF
      Celular
      Telefone
      email
      funcoe {
        code
      }
      endereco {
        Rua
        Numero
        Bairro
        CEP
        Cidade
        UF
      }
    }
  }
`;

export default GET_PERSONAL_DATA;
