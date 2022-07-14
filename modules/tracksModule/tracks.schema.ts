import { gql } from 'apollo-server'

export const trackSchema = gql`
  type Track {
      _id: ID!
      title: String  
      albumId: String
      artistsIds: [String]
      bandsIds: [String]
      duration: Int
      released: Int
      genresIds: [String]
  }

  type deleteResponse {
    acknowledged: Boolean,
    deletedCount: Int
  }

  input updateTrackInput {
      id : ID!
      title: String  
      albumId: String
      artistsIds: [String]
      bandsIds: [String]
      duration: Int
      released: Int
      genresIds: [String]
  }

  input createTrackInput {
      title: String!  
      albumId: String
      artistsIds: [String]
      bandsIds: [String]
      duration: Int
      released: Int
      genresIds: [String]
  }

  type Query {
    getAllTracks(limit: Int, offset: Int) : [Track],
    getTrackById(id: ID!) : Track
  }

  type Mutation {
    deleteOneTrack(id: ID!) : deleteResponse,
    updateOneTrack(data: updateTrackInput): Track,
    createOneTrack(data: createTrackInput): Track,
  }
`
