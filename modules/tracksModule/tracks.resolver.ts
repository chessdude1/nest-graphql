import { IId, IPagination, TDataSourcesResolvers } from "../commonTypes/types";
import {ITrackData, Track} from './tracks.types'

export const tracksResolver = {
  Query : {
    getAllTracks: async (_ : undefined, { limit, offset } : IPagination, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.tracksModule.getAll(limit, offset);
    },
    getTrackById: async (_ : undefined, { id } : IId, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.tracksModule.getOne(id);
    },
  },

  Mutation: {
    deleteOneTrack: async (_ : undefined, {id} : IId, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.tracksModule.deleteOne(id);
    },
    updateOneTrack: async (_ : undefined, args : ITrackData, {dataSources} : TDataSourcesResolvers) => {
      const {data} = args;
      const {id} = data;
      return dataSources.tracksModule.updateOne(id, data)
    },
    createOneTrack: async (_ : undefined, args : {data: Omit<Track, '_id'>}, {dataSources} : TDataSourcesResolvers) => {
      const {data} = args
      return dataSources.tracksModule.createOne(data)
    },

  }
}