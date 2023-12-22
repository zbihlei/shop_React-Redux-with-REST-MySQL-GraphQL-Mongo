 import  {gql} from 'apollo-server-express';

const typeDefs = gql `

    type General {
        _id: ID,
        name: String
    }
    type Categories {
        _id: ID,
        name: String,
        image: String
    }
    type Query {
        getGeneral: [General],
        getLite: [Categories],
        getStrong: [Categories]
    }
 `;

 export default typeDefs; 