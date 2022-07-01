import { ApolloServer } from 'apollo-server';
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { typeDefsBook } from './typeDefs/index.js'
import { resolversBook } from './resolvers/index.js'
import { SpaceXAPI } from "./API/spaceX-api.js";

const typeDefs = mergeTypeDefs(
  [typeDefsBook]
);

const resolvers = mergeResolvers(
  [resolversBook]
);


const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  dataSources: () => {
    return {
      spaceX: new SpaceXAPI()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});