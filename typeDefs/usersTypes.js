import { gql } from 'apollo-server';

export const typeDefsUsers = gql`
  type User {
    _id:       String,
    firstName: String,
    lastName:  String,
    password:  String,
    email:     String,
  }
  type Query {
    getUserById(id: String): User
  }

  type JWTToken {
    jwt : String
  }
  type Mutation {
    login(email: String, password : String) : JWTToken
  }
`;
