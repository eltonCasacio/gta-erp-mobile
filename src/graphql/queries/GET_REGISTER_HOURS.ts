import {gql} from '@apollo/client';

const GET_REGISTERHOURS = gql`
  query GET_REGISTERHOURS {
    registerHours {
      id
      hour
      employee {
        id
        name
      }
    }
  }
`;

export default GET_REGISTERHOURS;
