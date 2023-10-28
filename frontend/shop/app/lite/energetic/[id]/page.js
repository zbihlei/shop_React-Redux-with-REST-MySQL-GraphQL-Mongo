import ProductPage from '../../../components/ProductPage' 
import { getSpecificItem } from '../../../actions/getData'


export default async function SingleProductPage({params}){
  
const title = 'energetic';
const specificProduct = await getSpecificItem(title, params.id);

  return (
    <ProductPage title={title} specificProduct={specificProduct} />
  )
}

