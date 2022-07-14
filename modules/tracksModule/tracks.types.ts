interface Track {
  _id: string;
  title: string;  
  albumId: string;
  artistsIds: string[];
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}

interface ITrackInternal {
  id: string;
  title: string;  
  albumId: string;
  artistsIds: string[];
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}

interface ITrackData {
  data: ITrackInternal
}