import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';
import { IUserLogin, User } from "./users.types";

export class UsersModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_BASEAPI_URL;
  }

  async getUserById(id : string) {
    return this.get(id);
  }

  async login({ email, password } : IUserLogin) {
    return this.post('/login', { email, password });
  }

  async register(data : Omit<User, "_id">) {
    return this.post('/register', { ...data });
  }

  async verify() {
    return await this.post('')
  }
}
