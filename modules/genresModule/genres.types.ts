interface Genre {
  _id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}

interface IGenreInternal {
  id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}

interface IGenreData {
  data: IGenreInternal
}