export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

interface IUserInternal {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface IUserLogin {
  email : string,
  password: string
}
