import { ApolloServer, gql } from 'apollo-server';

export const typeDefsTest = gql`
  type Test {
   like: String
  }

  type Query {
    test: [Test]
  }
`;