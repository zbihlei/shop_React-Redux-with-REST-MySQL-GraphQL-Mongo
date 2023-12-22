import {getGeneral} from './services/getData';
import Main from '../app/components/Main';
import {gql} from '@apollo/client';

export default async  function Home() {
  const query = gql`
  query {
    getGeneral {
      _id
      name
    }
  }
`;

  const general = await getGeneral();
  
  return (
   <Main general={general} gqlQuery={query}/>
  )
}
