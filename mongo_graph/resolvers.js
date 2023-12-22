  import General from './models/General.model.js';
  import { Lite, Strong } from './models/Categories.model.js';

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
        } 
  }
}

export default resolvers;