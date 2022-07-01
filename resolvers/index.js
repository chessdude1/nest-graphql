const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glassssss',
    author: 'Paul Auster',
  },
];


export const resolversBook = {
  Query: {
    books: () => books,
  },
};
