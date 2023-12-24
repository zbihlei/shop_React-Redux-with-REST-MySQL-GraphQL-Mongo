import { gql } from '@apollo/client';

export const GET_GENERAL = gql`
query {
  getGeneral {
    _id
    name
  }
}
`;

export const GET_LIGHT = gql`
query{
  getLite {
    _id
    name
    image
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

export const GET_WHISKEY = gql`
query{
  getWhiskey {
    _id
    name
    type
    image
    description
    price
    volume
    subtype
    }
}
`;

export const GET_WINE = gql`
query{
  getWine {
    _id
    name
    type
    image
    description
    price
    volume
    subtype
    }
}
`;

export const GET_WHISKEY_BY_ID = gql`
query GetById($id: ID!) {
  getWhiskeyById(id: $id) {
    _id
    name
    type
    image
    description
    price
    volume
    subtype
  }
}
`;

export const GET_WINE_BY_ID = gql`
query GetById($id: ID!) {
  getWineById(id: $id) {
    _id
    name
    type
    image
    description
    price
    volume
    subtype
  }
}
`;

export const GET_BEER =  gql`
query {
  getBeer{
    _id
    name
    type
    image
    description
    price
    volume
    subtype
  }
}
`;

export const  GET_BEER_BY_ID = gql`
query GetById($id: ID!) {
    getBeerById(id: $id) {
      _id
      name
      type
      image
      description
      price
      volume
      subtype
}
}
`;
export const GET_COCTAIL = gql`
query{
  getCoctail {
    _id
    name
    type
    image
    description
    price
    volume
    subtype
    }
}
`;

export const GET_COCTAIL_BY_ID = gql`
query GetById($id: ID!) {
  getCoctailById(id: $id) {
    _id
    name
    type
    image
    description
    price
    volume
    subtype
  }
}
`;

export const GET_CRAFT =  gql`
query{
  getCraft {
    _id
    name
    type
    image
    description
    price
    volume
    subtype
    }
}
`;

export const GET_CRAFT_BY_ID =  gql`
query GetById($id: ID!) {
  getCraftById(id: $id) {
    _id
    name
    type
    image
    description
    price
    volume
    subtype
  }
}
`;

export const GET_ENERGETIC = gql`
query{
  getEnergetic {
    _id
    name
    type
    image
    description
    price
    volume
    subtype
    }
}
`;

export const GET_ENERGETIC_BY_ID = gql`
query GetById($id: ID!) {
  getEnergeticById(id: $id) {
    _id
    name
    type
    image
    description
    price
    volume
    subtype
  }
}
`;

export const GET_ALL_ORDERS = gql`
  query GetAllOrders {
    getAllOrders {
      _id
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
