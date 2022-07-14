import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';
import {  Artist, IArtistInternal } from "./artists.types";

export class ArtistsModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_BASEAPI_URL;
  }

  willSendRequest(request : RequestOptions) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getAllArtists(limit =5 , offset =0) {
    const response = await this.get('');

    let filteredArtists = response.items;

    if (offset) {
      filteredArtists = filteredArtists.slice(offset);
    }
    if (limit) {
      filteredArtists = filteredArtists.slice(0, limit);
    }

    return filteredArtists;
  }

  async deleteOne(id : string) {
    return await this.delete(`${id}`);
  }

  async getOne(id : string) {
    return await this.get(`${id}`);
  }

  async updateOne(id : string, args : IArtistInternal) {
    return await this.put(`${id}`, { ...args });
  }

  async createOne(data : Omit<Artist, '_id'>) {
    return await this.post('', { ...data });
  }
}
