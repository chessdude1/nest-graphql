import { gql } from "apollo-server";

export const bandsSchema = gql`
  type Member {
    _id: ID
    firstName: String
    secondName: String
    middleName: String
    country: String
    instrument: String
    years: [String]
  }

  input MemberInput {
    _id: ID
    firstName: String
    secondName: String
    middleName: String
    country: String
    instrument: String
    years: [String]
  }

  type Band {
    _id: ID
    name: String
    origin: String
    membersId: [Member]
    website: String
    genresIds: [String]
}

input createBandInput {
  members: [MemberInput]
  genresIds : [String]
  name : String!
}

type deleteBandResponse {
  acknowledged: Boolean
  deletedCount: Int
}

input updateBandInput {
  id: ID!,
  name: String
  origin: String
  website: String
  members: [MemberInput]
  genresIds: [ID!]
}

 type Query {
  getAllBands(limit: Int, offset: Int) : [Band],
  getById(id: ID): Band,
 }

 type Mutation {
  createBand(data : createBandInput) : Band,
  deleteBand(id : ID!) : deleteBandResponse,
  updateBand(data: updateBandInput) : Band
 }
`