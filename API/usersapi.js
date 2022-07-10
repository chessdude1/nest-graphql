import { RESTDataSource } from 'apollo-datasource-rest';

export class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3004/v1/users/';
  }

  willSendRequest(request) {
    console.log(this.context.token)
    request.headers.set('Content-Type', 'application/json');
    request.headers.set('Authorization', this.context.token);
  }

  async getUserById(id) {
    return this.get(id);
  }

  async login({ email, password }) {
    return this.post('/login', { email, password })
  }
}