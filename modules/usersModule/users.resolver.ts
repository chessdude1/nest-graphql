//@ts-nocheck

export const userResolvers = {
  Query: {
    getUserById: async (_, { id }, { dataSources }) => {
      return dataSources.usersModule.getUserById(id);
    },
    login: async (_, { email, password }, { dataSources }) => {
      return await dataSources.usersModule.login({ email, password });
    },
  },

  Mutation: {
    register: async (_, { data }, { dataSources }) => {
      const { email, password, firstName, lastName } = data;
      return await dataSources.usersModule.register({
        email,
        password,
        firstName,
        lastName,
      });
    },
  },
};
