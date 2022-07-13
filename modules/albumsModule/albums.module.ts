//@ts-nocheck

import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class AlbumsModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_BASEAPI_URL;
  }

  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getAllAlbums({ limit, offset }) {
    const response = await this.get('');
    let filteredAlbums = response.items;
    if (offset) {
      filteredAlbums = filteredAlbums.slice(offset);
    }
    if (limit) {
      filteredAlbums = filteredAlbums.slice(0, limit);
    }

    return filteredAlbums;
  }

  async deleteOne(id) {
    return await this.delete(`${id}`)
  }

  async updateAlbum(id, args) {
    return await this.put(`${id}`, {...args})
  }

  async createOne(args) {
    return await this.post('', {...args})
  }

  async getOne(id) {
    return await this.get(`${id}`)
  }
}
