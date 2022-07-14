import { gql } from 'apollo-server';

export const albumsSchema = gql`
  type Album {
    _id: ID!
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
    image: String
  }

  input updateAlbumInput {
    id: ID!
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
    image: String
  }

  input createAlbumInput {
    name: String!
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
    image: String
  }

  type deleteResponse {
    acknowledged: Boolean,
    deletedCount: Int
  }

  type Query {
    getAllAlbums(limit: Int, offset: Int): [Album],
    getAlbumById(id: ID!) : Album
  }

  type Mutation {
    deleteAlbum(id: ID!) : deleteResponse,
    updateAlbum(data: updateAlbumInput) : Album,
    createAlbum(data: createAlbumInput) : Album
  }
`;
