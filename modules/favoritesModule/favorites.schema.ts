import { gql } from "apollo-server";

export const favoritesSchema = gql`
  type Favorite {
    _id: ID!
    userId: String
    bandsIds: [String]
    genresIds: [String]
    artistsIds: [String]
    tracksIds: [String]
  }

  type Query {
    getAllFavorites : Favorite, 
  }

  type Mutation {
    deleteFavorites(type: String!, id: String!) : Favorite,
    addFavorites(type: String!, id: String!) : Favorite
  }

`