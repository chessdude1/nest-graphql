export const resolversBook = {
  Query: {
    todos: async (_, __, { dataSources }) => {
      return dataSources.spaceX.getTodos();
    },
  },
};
