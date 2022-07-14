import { TDataSourcesResolvers } from "../commonTypes/types";
import { IFavoriteInput } from "./favorite.types";

export const favoritesResolver = {
  Query: {
    getAllFavorites: async (_ : undefined, __ : undefined, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.favoritesModule.getAllFavorites();
    },
  },

  Mutation: {
    deleteFavorites: async (_ : undefined, args : IFavoriteInput, {dataSources} : TDataSourcesResolvers) => {
      return dataSources.favoritesModule.deleteOne(args)
    },
    addFavorites: async (_ : undefined, args : IFavoriteInput, {dataSources} : TDataSourcesResolvers) => {
      return dataSources.favoritesModule.addOne(args)
    },
  }
};