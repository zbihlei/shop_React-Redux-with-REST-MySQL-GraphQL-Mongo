import {getGeneral} from './actions/getData';
import styles from './page.module.css'
import Main from '../app/components/Main'

export default async  function Home() {

  const general = await getGeneral();
  
  return (
   <Main general={general}/>
  )
}
