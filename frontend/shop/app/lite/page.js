import {getSpecific} from '../actions/getData';
import ProductList from '../components/ProductList'

export default async  function Lite() {

  const title = 'lite'
  const specific = await getSpecific(title);
  
  return (
   <ProductList title={title} specific={specific}/>
   )
  }