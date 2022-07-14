//@ts-nocheck

import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';


export class FavoritesModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVORITES_BASEAPI_URL;
  }

  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getAllFavorites() {
    return await this.get('')
  }

  async deleteOne(args) {
    return await this.put('/remove', args)
  }

  async addOne(args) {
    return await this.put('/add', args)
  }

}