  import General from './models/General.model.js';
  import { Lite, Strong } from './models/Categories.model.js';
  import {Beer, Coctail, Energetic, Craft, Whiskey, Wine} from './models/Subcategories.model.js';
  import mongoose from 'mongoose';

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
  }
}

export default resolvers;