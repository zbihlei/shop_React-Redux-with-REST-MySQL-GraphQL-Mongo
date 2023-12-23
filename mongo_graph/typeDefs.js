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
    type Subcategories {
        _id: ID,
        name: String,
        type: String,
        image: String,
        description: String,
        price: Float,
        volume: String,
        subtype: String
    }
    type Query {
        getGeneral: [General],
        getLite: [Categories],
        getStrong: [Categories],
        getBeer: [Subcategories],
        getEnergetic: [Subcategories],
        getCoctail: [Subcategories],
        getCraft: [Subcategories],
        getWhiskey: [Subcategories],
        getWine: [Subcategories],
        getBeerById(id: ID): Subcategories,
        getEnergeticById(id: ID): Subcategories,
        getCraftById(id: ID): Subcategories,
        getCoctailById(id: ID): Subcategories,
        getWhiskeyById(id: ID): Subcategories,
        getWineById(id: ID): Subcategories
    }
 `;

 export default typeDefs; 