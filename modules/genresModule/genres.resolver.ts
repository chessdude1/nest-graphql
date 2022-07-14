//@ts-nocheck

export const genreResolver = {
  Query : {
    getAllGenres: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.genresModule.getAll(limit, offset);
    },
    getGenreById: async (_, { id }, { dataSources }) => {
      return dataSources.genresModule.getOne(id);
    },
  },

  Mutation : {
    deleteGenreById: async (_, { id }, { dataSources }) => {
      return dataSources.genresModule.deleteOne(id);
    },

    updateGenreById: async (_, {data} = args, { dataSources }) => {
      const {id} = data;
      return dataSources.genresModule.updateOne(id, data);
    }, 

    createGenre: async (_, {data} = args, {dataSources}) => {
      return dataSources.genresModule.createOne(data);
    }
  }
}