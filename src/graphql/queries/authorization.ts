import {gql} from '@apollo/client';

const AUTHORIZATION = gql`
  mutation {
    login(
      input: {identifier: "eltoncasacio@hotmail.com", password: "strapi@2"}
    ) {
      jwt
    }
  }
`;

export default AUTHORIZATION;
