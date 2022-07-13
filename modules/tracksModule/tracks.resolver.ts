//@ts-nocheck

export const tracksResolver = {
  Query : {
    getAllTracks: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.tracksModule.getAll(limit, offset);
    },
    getTrackById: async (_, { id }, { dataSources }) => {
      return dataSources.tracksModule.getOne(id);
    },
  },

  Mutation: {
    deleteOneTrack: async (_, {id}, { dataSources }) => {
      return dataSources.tracksModule.deleteOne(id);
    },
    updateOneTrack: async (_, {data} = args, {dataSources}) => {
      const {id} = data;
      return dataSources.tracksModule.updateOne(id, data)
    },
    createOneTrack: async (_, data, {dataSources}) => {
      const {id} = data;
      return dataSources.tracksModule.updateOne(id, data)
    },
    createOneTrack: async (_, {data} = args, {dataSources}) => {
      return dataSources.tracksModule.createOne(data)
    },

  }
}