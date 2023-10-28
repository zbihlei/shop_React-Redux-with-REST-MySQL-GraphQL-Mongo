import ProductList from '../../components/ProductsList'
import { getSpecific } from '../../services/getData';

export default async function Energetic(){
    const title = 'energetic'
    const specific = await getSpecific(title);

  return (
    <ProductList title={title} specific={specific}/>
    )
}

