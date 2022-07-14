//@ts-nocheck

import { gql } from 'apollo-server';

export const artistsSchema = gql`
  type Artist {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  input artistInput {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [bandInput]
    instruments: [String]
  }

  input createArtistInput {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [bandInput]
    instruments: [String]
  }

  type Member {
    _id: ID
    firstName: String
    secondName: String
    middleName: String
    country: String
    instrument: String
    years: [String]
  }

  interface Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  input genreInput {
    _id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  input bandInput {
    id: ID!
    name: String
    origin: String
    members: [memberInput]
    website: String
    genres: [genreInput]
  }

  input memberInput {
    _id: ID
    firstName: String
    secondName: String
    middleName: String
    country: String
    instrument: String
    years: [String]
  }

  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type deleteArtistResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Query {
    getAllArtists(limit: Int, offset: Int): [Artist]
    getOneArtist(id: ID!): Artist
  }

  type Mutation {
    deleteArtist(id: ID!): deleteArtistResponse
    updateArtist(data: artistInput): Artist
    createArtist(data: createArtistInput): Artist
  }
`;
