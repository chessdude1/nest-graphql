import { IId, IPagination, TDataSourcesResolvers } from "../commonTypes/types";
import { IAlbumData } from "./album.types";

export const albumsResolver = {
  Query: {
    getAllAlbums: async (_ : undefined, { limit, offset } : IPagination, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.albumsModule.getAllAlbums(limit, offset);
    },
    getAlbumById: async (_ : undefined, {id } : IId, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.albumsModule.getOne(id);
    },
  },

  Mutation: {
    deleteAlbum: async (_ : undefined, { id } : IId, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.albumsModule.deleteOne(id);
    },
    updateAlbum: async (_ : undefined, args : IAlbumData , { dataSources } : TDataSourcesResolvers) => {
      const {data} = args;
      const {id} = data; 
      return dataSources.albumsModule.updateAlbum(id, data);
    },
    createAlbum: async (_ : undefined, args : IAlbumData, { dataSources } : TDataSourcesResolvers) => {
      const {data} = args;
      return dataSources.albumsModule.createOne(data);
    },
  }
};
