import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

import { Album, IAlbumInternal } from "./album.types";

export class AlbumsModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_BASEAPI_URL;
  }

  willSendRequest(request : RequestOptions) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getAllAlbums(limit : number, offset : number ) {
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

  async deleteOne(id : string) {
    return await this.delete(`${id}`)
  }

  async updateAlbum(id : string, args : Omit<Album, '_id'>) {
    return await this.put(`${id}`, {...args})
  }

  async createOne(args : IAlbumInternal) {
    return await this.post('', {...args})
  }

  async getOne(id : string) {
    return await this.get(`${id}`)
  }
}
