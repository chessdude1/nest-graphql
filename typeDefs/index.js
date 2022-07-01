import { gql } from 'apollo-server';

export const typeDefsBook = gql`
  type TODO {
    userId : String,
    id: Int,
    title : String,
    completed: Boolean
  }
  type Query {
    todos: TODO
  }
`;
