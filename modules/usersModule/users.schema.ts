//@ts-nocheck

import { gql } from 'apollo-server';

export const usersSchema = gql`
  type user {
    _id: ID!
    firstName: String
    lastName: String
    password: String
    email: String
  }

  type JWTToken {
    jwt: String
  }

  input registerInput {
    firstName: String!
    lastName: String!
    password: String!
    email: String!
    favouriteArtistIds: [String!]
  }

  type Query {
    getUserById(id: String): user
    login(email: String!, password: String!): JWTToken
  }

  type Mutation {
    register(data: registerInput): user
  }
`;
