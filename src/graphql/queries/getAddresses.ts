import {gql} from '@apollo/client';

const GET_ADDRESSES = gql`
  query GET_ADDRESSES {
    addresses {
      id
      street
      numberHouse
      zipcode
      neighborhood
      city
    }
  }
`;

export default GET_ADDRESSES;
