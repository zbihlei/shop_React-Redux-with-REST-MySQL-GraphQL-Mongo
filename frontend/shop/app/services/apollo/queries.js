import {  gql } from '@apollo/client';

export const GET_GENERAL = gql`
  query {
    getGeneral {
      _id
      name
    }
  }
`;