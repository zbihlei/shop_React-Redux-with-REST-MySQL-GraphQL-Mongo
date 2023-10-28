import {getSpecific} from '../services/getData';
import ProductsList from '../components/ProductsList'

export default async function Lite() {

  const title = 'lite'
  const specific = await getSpecific(title);
  
  return (
   <ProductsList title={title} specific={specific}/>
   )
  }