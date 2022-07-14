import { IId, IPagination, TDataSourcesResolvers } from "../commonTypes/types";
import { Artist, IArtistData } from "./artists.types";

export const artistsResolver = {
  Query: {
    getAllArtists: async (_ : undefined, { limit, offset } : IPagination, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.artistsModule.getAllArtists(limit, offset);
    },
    getOneArtist: async (_ : undefined, { id } : IId , { dataSources } : TDataSourcesResolvers) => {
      return dataSources.artistsModule.getOne(id);
    },
  },

  Mutation: {
    deleteArtist: async (_ : undefined, { id } : IId, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.artistsModule.deleteOne(id);
    },
    updateArtist: async (_ : undefined, args : IArtistData, { dataSources } : TDataSourcesResolvers) => {
      const {data} = args;
      const { id } = data;
      return dataSources.artistsModule.updateOne(id, data);
    },
    createArtist: async (_ : undefined, args : {data: Omit<Artist, '_id'>}, { dataSources } : TDataSourcesResolvers) => {
      const {data} = args
      return dataSources.artistsModule.createOne(data);
    },
  },
};
