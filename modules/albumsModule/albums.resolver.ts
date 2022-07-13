//@ts-nocheck

export const albumsResolver = {
  Query: {
    getAllAlbums: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.albumsModule.getAllAlbums(limit, offset);
    },
    getAlbumById: async (_, {id}, { dataSources }) => {
      return dataSources.albumsModule.getOne(id);
    },
  },

  Mutation: {
    deleteAlbum: async (_, { id }, { dataSources }) => {
      return dataSources.albumsModule.deleteOne(id);
    },
    updateAlbum: async (_, {data} = args, { dataSources }) => {
      const {id} = data; 
      return dataSources.albumsModule.updateAlbum(id, data);
    },
    createAlbum: async (_, {data} = args, { dataSources }) => {
      return dataSources.albumsModule.createOne(data);
    },
  }
};
