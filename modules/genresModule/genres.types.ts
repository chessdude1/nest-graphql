export interface Genre {
  _id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}

export interface IGenreInternal {
  id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}

export interface IGenreData {
  data: IGenreInternal
}