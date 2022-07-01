import { ApolloServer, gql } from 'apollo-server';

export const typeDefsBook = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
