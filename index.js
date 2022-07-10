import { ApolloServer } from 'apollo-server';
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { typeDefsUsers } from './typeDefs/usersTypes.js'
import { resolversUser } from './resolvers/usersResolver.js'
import { UsersApi } from "./API/usersapi.js";

const typeDefs = mergeTypeDefs(
  [typeDefsUsers]
);

const resolvers = mergeResolvers(
  [resolversUser]
);


const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req }) => {
    const token = req.headers.authorization || '';

    return { token };
  },
  dataSources: () => {
    return {
      usersApi: new UsersApi()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});