import { favoritesResolver } from './modules/favoritesModule/favorites.resolver';
import { albumsResolver } from './modules/albumsModule/albums.resolver';
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
import { AlbumsModule } from './modules/albumsModule/albums.module';
import { albumsSchema } from './modules/albumsModule/albums.schema';
import { trackSchema } from "./modules/tracksModule/tracks.schema";
import { tracksResolver } from "./modules/tracksModule/tracks.resolver";
import { TracksModule } from "./modules/tracksModule/tracks.module";
import { FavoritesModule } from "./modules/favoritesModule/favorites.module";
import { favoritesSchema } from "./modules/favoritesModule/favorites.schema";

const typeDefs = mergeTypeDefs([
  usersSchema,
  bandsSchema,
  artistsSchema,
  albumsSchema,
  trackSchema,
  favoritesSchema
]);

const resolvers = mergeResolvers([
  userResolvers,
  bandsResolvers,
  artistsResolver,
  albumsResolver,
  tracksResolver,
  favoritesResolver
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
      albumsModule: new AlbumsModule(),
      tracksModule: new TracksModule(),
      favoritesModule: new FavoritesModule()
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
