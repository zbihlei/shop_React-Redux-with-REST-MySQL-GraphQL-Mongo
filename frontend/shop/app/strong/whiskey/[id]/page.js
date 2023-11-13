import ProductPage from '../../../components/ProductPage' 
import { getSpecificItem } from '../../../services/getData'


export default async function SingleProductPage({params}){
  
const title = 'whiskey';
const specificProduct = await getSpecificItem(title, params.id);

  return (
    <ProductPage title={title} specificProduct={specificProduct} />
  )
}