import { IId, IPagination, TDataSourcesResolvers } from "../commonTypes/types";
import { Genre, IGenreData } from "./genres.types";

export const genreResolver = {
  Query : {
    getAllGenres: async (_ : undefined, { limit, offset } : IPagination, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.genresModule.getAll(limit, offset);
    },
    getGenreById: async (_ : undefined, { id } : IId, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.genresModule.getOne(id);
    },
  },

  Mutation : {
    deleteGenreById: async (_ : undefined, { id } : IId , { dataSources } : TDataSourcesResolvers) => {
      return dataSources.genresModule.deleteOne(id);
    },

    updateGenreById: async (_ : undefined, args : IGenreData  , { dataSources } : TDataSourcesResolvers) => {
      const {data} = args
      const {id} = data;
      return dataSources.genresModule.updateOne(id, data);
    }, 

    createGenre: async (_ : undefined, args : {data : Omit<Genre, '_id'>}, {dataSources} : TDataSourcesResolvers) => {
      const {data} = args;
      return dataSources.genresModule.createOne(data);
    }
  }
}