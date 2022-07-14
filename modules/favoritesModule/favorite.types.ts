export interface Favorite {
  _id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
}

export interface FavoriteInternal {
  id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
}

export interface IFavoriteInput {
  type : string,
  id: string
}

export interface FavoriteData {
  data: FavoriteInternal
}