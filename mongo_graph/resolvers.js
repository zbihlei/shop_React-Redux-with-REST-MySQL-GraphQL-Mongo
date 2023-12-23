  import General from './models/General.model.js';
  import { Lite, Strong } from './models/Categories.model.js';
  import {Beer, Coctail, Energetic, Craft, Whiskey, Wine} from './models/Subcategories.model.js';

  const resolvers = {
    Query: {
        getGeneral: async () => {
          return await General.find();
        },
        getLite: async () => {
          return await Lite.find();
        },
        getStrong: async () => {
          return await Strong.find();
        },
        getBeer: async () => {
          return await Beer.find();
        },
        getEnergetic: async () => {
          return await Energetic.find();
        },
        getCoctail: async () => {
          return await Coctail.find();
        },
        getCraft: async () => {
          return await Craft.find();
        },
        getWhiskey: async () => {
          return await Whiskey.find();
        },
        getWine: async () => {
          return await Wine.find();
        },
        getBeerById: async (_, { id }) => {
          return await  Beer.findById(id);
        },
        getCoctailById: async (_, { id }) => {
          return await  Coctail.findById(id);
        },
        getEnergeticById: async (_, { id }) => {
          return await  Energetic.findById(id);
        },
        getCraftById: async (_, { id }) => {
          return await  Craft.findById(id);
        },
        getWhiskeyById: async (_, { id }) => {
          return await  Whiskey.findById(id);
        },
        getWineById: async (_, { id }) => {
          return await  Wine.findById(id);
        },                  
  }
}

export default resolvers;