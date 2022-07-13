//@ts-nocheck

export const bandsResolvers = {
  Query: {
    getAllBands: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.bandsModule.getAllBands(limit, offset);
    },
    getById: async (_, { id }, { dataSources }) => {
      return dataSources.bandsModule.getOne(id);
    },
  },

  Mutation: {
    createBand: async (_, { data }, { dataSources }) => {
      const { members, genresIds, name } = data;
      return dataSources.bandsModule.createOne(members, genresIds, name);
    },
    deleteBand: async (_, { id }, { dataSources }) => {
      return dataSources.bandsModule.deleteOne(id, args);
    },
    updateBand: async (_, { data } = args, { dataSources }) => {
      const { id } = data;
      return dataSources.bandsModule.updateOne(id, data);
    },
  },
};
