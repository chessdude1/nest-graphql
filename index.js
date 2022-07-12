import { ApolloServer } from 'apollo-server';
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { userResolvers } from "./modules/usersModule/users.resolver.js";
import { UsersModule } from "./modules/usersModule/users.module.js";
import { usersSchema } from "./modules/usersModule/users.schema.js";

const typeDefs = mergeTypeDefs(
  [usersSchema]
);

const resolvers = mergeResolvers(
  [userResolvers]
);


const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req }) => {
    const token = req.headers.authorization;
    return { token };
  },
  dataSources: () => {
    return {
      usersModule: new UsersModule()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});