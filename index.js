import { ApolloServer } from 'apollo-server';
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { userResolvers } from "./modules/usersModule/users.resolver.js";
import { UsersModule } from "./modules/usersModule/users.module.js";
import { usersSchema } from "./modules/usersModule/users.schema.js";
import { bandsSchema } from "./modules/bandsModule/bands.schema.js";
import { bandsResolvers } from "./modules/bandsModule/bands.resolver.js";
import { BandsModule } from "./modules/bandsModule/bands.module.js";

const typeDefs = mergeTypeDefs(
  [usersSchema, bandsSchema]
);

const resolvers = mergeResolvers(
  [userResolvers, bandsResolvers]
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
      usersModule: new UsersModule(),
      bandsModule: new BandsModule()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});