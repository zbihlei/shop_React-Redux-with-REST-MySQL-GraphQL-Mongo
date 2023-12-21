  import General from './models/General.model.js';

  const resolvers = {
    Query: {
        getGeneral: async () => {
          return await General.find();
    },
  }
}

export default resolvers;