//@ts-nocheck

export const favoritesResolver = {
  Query: {
    getAllFavorites: async (_, __, { dataSources }) => {
      return dataSources.favoritesModule.getAllFavorites();
    },
  },

  Mutation: {
    deleteFavorites: async (_, args, {dataSources}) => {
      return dataSources.favoritesModule.deleteOne(args)
    },
    addFavorites: async (_, args, {dataSources}) => {
      return dataSources.favoritesModule.addOne(args)
    },
  }
};