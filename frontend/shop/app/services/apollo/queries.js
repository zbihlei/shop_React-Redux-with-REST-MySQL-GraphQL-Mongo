import {  gql } from '@apollo/client';

export const GET_GENERAL = gql`
  query {
    getGeneral {
      _id
      name
    }
  }
`;
export const GET_STRONG = gql`
  query{
    getStrong {
      _id
      name
      image
    }
  }
`;
export const GET_LITE = gql`
  query{
    getLite {
      _id
      name
      image
    }
  }
`;