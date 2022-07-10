

export const resolversUser = {
  Query: {
    getUserById: async (_, { id }, { dataSources }) => {
      return dataSources.usersApi.getUserById(id);
    },
  },

  Mutation: {
    login: async (_, { email, password }, { dataSources }) => {
      const resOfMutation = await dataSources.usersApi.login({ email, password })
      return resOfMutation
    }
  }
};
