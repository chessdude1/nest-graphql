import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class GenresModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_BASEAPI_URL;
  }

  willSendRequest(request : RequestOptions) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getAll(limit : number, offset : number) {
    let response = await this.get('');

    let filteredGenres = response.items;
    if (offset) {
      filteredGenres = filteredGenres.slice(offset);
    }
    if (limit) {
      filteredGenres = filteredGenres.slice(0, limit);
    }

    return filteredGenres;
  }

  async getOne(id : string) {
    return await this.get(`${id}`)
  }

  async deleteOne(id : string) {
    return await this.delete(`${id}`)
  }

  async updateOne(id : string, args : IGenreInternal) {

    const response = await this.put(`${id}`, {...args})
    if (response === '') {
      return {
        _id : id,
        ...args
      }
    }
  }

  async createOne(args :  Omit<Genre, '_id'>) {
    return await this.post('', {...args})
  }

}