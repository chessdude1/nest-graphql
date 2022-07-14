import { gql } from 'apollo-server'

export const genresSchema = gql`
  type Genre {
    _id: ID
    name: String
    description: String
    country: String
    year:  Int
  }

  input updateGenreInput{
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  input createGenreInput{
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    getAllGenres(limit: Int, offset: Int) : [Genre],
    getGenreById(id: ID!) : Genre
  }

  type deleteGenreResponse {
    acknowledged: Boolean,
    deletedCount: Int
  }

  type Mutation {
    deleteGenreById(id: ID!) : deleteGenreResponse,
    updateGenreById(data: updateGenreInput) : Genre,
    createGenre(data : createGenreInput) : Genre
  }


`
