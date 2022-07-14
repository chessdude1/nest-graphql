export interface Member {
  _id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  country: string;
  instrument: string;
  years: string[]
}

export interface Band {
  _id: string;
  name: string;
  origin: string;
  membersId: Member[];
  website: string;
  genresIds: string[];
}

export interface IBandInternal {
  id: string;
  name: string;
  origin: string;
  membersId: Member[];
  website: string;
  genresIds: string[];
}


export interface IBandData {
  data: IBandInternal
}
