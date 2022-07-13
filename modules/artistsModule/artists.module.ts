//@ts-nocheck

import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class ArtistsModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_BASEAPI_URL;
  }

  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getAllArtists({ limit, offset }) {
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

  async deleteOne(id) {
    return await this.delete(`${id}`);
  }

  async getOne(id) {
    return await this.get(`${id}`);
  }

  async updateOne(id, args) {
    return await this.put(`${id}`, { ...args });
  }

  async createOne(data) {
    return await this.post('', { ...data });
  }
}
