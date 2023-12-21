 import  {gql} from 'apollo-server-express';

const typeDefs = gql `

    type General {
        _id: ID,
        name: String
    }
    type Query {
        getGeneral: [General]
    }
 `;

 export default typeDefs; 