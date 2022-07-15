import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ApolloError, UserInputError } from "apollo-server";
import 'dotenv/config';
import { IFavoriteInput } from "./favorite.types";

export class FavoritesModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVORITES_BASEAPI_URL;
  }

  willSendRequest(request : RequestOptions) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getAllFavorites() {
    const response = await this.get('')
    if (response === '') {
      throw new UserInputError('Favorites empty')
    }    
  }

  async deleteOne(args : IFavoriteInput) {
    return await this.put('/remove', args)
  }

  async addOne(args : IFavoriteInput) {
    return await this.put('/add', args)
  }

}