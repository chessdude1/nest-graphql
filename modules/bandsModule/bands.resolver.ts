import { IId, IPagination, TDataSourcesResolvers } from "../commonTypes/types";
import { Band, IBandData } from "./bands.types";

export const bandsResolvers = {
  Query: {
    getAllBands: async (_ : undefined, { limit, offset } : IPagination , { dataSources } : TDataSourcesResolvers) => {
      return dataSources.bandsModule.getAllBands(limit, offset);
    },
    getById: async (_ : undefined, { id } : IId, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.bandsModule.getOne(id);
    },
  },

  Mutation: {
    createBand: async (_ : undefined, args : {data: Omit<Band, '_id'>}, { dataSources } : TDataSourcesResolvers) => {
      const {data} = args;
      return dataSources.bandsModule.createOne(data);
    },
    deleteBand: async (_ : undefined, { id }  : IId, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.bandsModule.deleteOne(id);
    },
    updateBand: async (_ : undefined, args : IBandData, { dataSources } : TDataSourcesResolvers) => {
      const {data} = args;
      const { id } = data;
      return dataSources.bandsModule.updateOne(id, data);
    },
  },
};
