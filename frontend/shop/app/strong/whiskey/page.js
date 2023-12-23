import ProductList from '../../components/ProductsList';
import { getSpecific } from '../../services/getData';
import {gql} from '@apollo/client';

export default async function Whiskey(){
    const title = 'whiskey'
    const query = gql`
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

    const specific = await getSpecific(title);

  return (
    <ProductList title={title} specific={specific} gqlQuery={query}/>
    )
}

