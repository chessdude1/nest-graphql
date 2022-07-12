import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config'


export class UsersModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_BASEAPI_URL;
  }

  async getAll(id) {
    return this.get(id);
  }

  async login({ email, password }) {
    return this.post('/login', { email, password })
  }

  async register({ email, password, firstName, lastName }) {
    return this.post('/register', { email, password, firstName, lastName })
  }
}