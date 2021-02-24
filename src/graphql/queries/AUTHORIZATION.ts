import {gql} from '@apollo/client';

const AUTHORIZATION = gql`
  mutation AUTHENTICATE($user: String!, $password: String!) {
    login(input: {identifier: $user, password: $password}) {
      jwt
    }
  }
`;

export default AUTHORIZATION;
