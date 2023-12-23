import ProductPage from '../../../components/ProductPage';
import { getSpecificItem } from '../../../services/getData';
import { gql } from '@apollo/client';


export default async function SingleProductPage({params}){
  
const title = 'wine';
    const query= gql`
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

const specificProduct = await getSpecificItem(title, params.id);

  return (
    <ProductPage title={title} specificProduct={specificProduct}  gqlQuery = {query}/>
  )
}