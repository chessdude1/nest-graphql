import { ApolloServer, gql } from 'apollo-server';
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { typeDefsBook } from './typeDefs/index.js'
import { resolversBook } from './resolvers/index.js'
import { typeDefsTest } from "./typeDefs/test.js";
import { resolversTest } from "./resolvers/test.js";

const typeDefs = mergeTypeDefs(
  [typeDefsBook, typeDefsTest]
);

const resolvers = mergeResolvers(
  [resolversBook, resolversTest]
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});