import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation CreateOrder($input: OrderInput!) {
    createOrder(input: $input) {
      firstname
      surname
      email
      phone
      date
      status
      basket {
        _id
        name
        type
        image
        price
        volume
        path
        quantity
      }
    }
  }
`;
