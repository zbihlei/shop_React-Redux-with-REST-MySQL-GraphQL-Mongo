import {getSpecific} from '../services/getData';
import ProductsList from '../components/ProductsList';
import {gql} from '@apollo/client';

export default async function Lite() {

  const title = 'lite'
  const query = gql`
  query{
    getLite {
      _id
      name
      image
    }
  }
`;
  const specific = await getSpecific(title);

  return (
   <ProductsList title={title} specific={specific} gqlQuery={query}/>
   )
  }