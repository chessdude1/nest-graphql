import { IId, TDataSourcesResolvers } from "../commonTypes/types";
import { IUserLogin, User } from "./users.types";

export const userResolvers = {
  Query: {
    getUserById: async (_ : undefined, { id } :IId, { dataSources } : TDataSourcesResolvers) => {
      return dataSources.usersModule.getUserById(id);
    },
    login: async (_ : undefined, { email, password } : IUserLogin, { dataSources } : TDataSourcesResolvers) => {
      return await dataSources.usersModule.login({ email, password });
    },
  },

  Mutation: {
    register: async (_ : undefined, args : {data: Omit<User, '_id'>}, { dataSources } : TDataSourcesResolvers) => {
      const {data} = args
      return await dataSources.usersModule.register(data);
    },
    verifyUser: async (_ : undefined, __: undefined, { dataSources } : TDataSourcesResolvers) => {
      return await dataSources.usersModule.verify();
    },
  },
};
