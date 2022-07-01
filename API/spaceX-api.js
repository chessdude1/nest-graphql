import { RESTDataSource } from 'apollo-datasource-rest';

export class SpaceXAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'https://jsonplaceholder.typicode.com/todos/1';
  }

  async getTodos() {
    return this.get('/');
  }
}