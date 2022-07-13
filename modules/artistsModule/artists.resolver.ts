//@ts-nocheck

export const artistsResolver = {
  Query: {
    getAllArtists: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.artistsModule.getAllArtists(limit, offset);
    },
    getOneArtist: async (_, { id }, { dataSources }) => {
      return dataSources.artistsModule.getOne(id);
    },
  },

  Mutation: {
    deleteArtist: async (_, { id }, { dataSources }) => {
      return dataSources.artistsModule.deleteOne(id);
    },
    updateArtist: async (_, { data } = args, { dataSources }) => {
      const { id } = data;
      return dataSources.artistsModule.updateOne(id, data);
    },
    createArtist: async (_, { data }, { dataSources }) => {
      console.log(data);
      return dataSources.artistsModule.createOne(data);
    },
  },
};
