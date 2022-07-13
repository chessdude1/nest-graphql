import { ApolloServer } from 'apollo-server';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { userResolvers } from './modules/usersModule/users.resolver';
import { usersSchema } from './modules/usersModule/users.schema';
import { bandsSchema } from './modules/bandsModule/bands.schema';
import { bandsResolvers } from './modules/bandsModule/bands.resolver';
import { BandsModule } from './modules/bandsModule/bands.module';
import { UsersModule } from './modules/usersModule/users.module';
import { artistsSchema } from './modules/artistsModule/artists.schema';
import { artistsResolver } from './modules/artistsModule/artists.resolver';
import { ArtistsModule } from './modules/artistsModule/artists.module';

const typeDefs = mergeTypeDefs([usersSchema, bandsSchema, artistsSchema]);

const resolvers = mergeResolvers([
  userResolvers,
  bandsResolvers,
  artistsResolver,
]);

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
      bandsModule: new BandsModule(),
      artistsModule: new ArtistsModule(),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
