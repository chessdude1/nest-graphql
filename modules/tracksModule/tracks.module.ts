//@ts-nocheck

import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class TracksModule extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.TRACKS_BASEAPI_URL
  }

  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getAll(limit, offset) {
    const response = await this.get('');

    let filteredTracks= response.items;

    if (offset) {
      filteredTracks = filteredTracks.slice(offset);
    }
    if (limit) {
      filteredTracks = filteredTracks.slice(0, limit);
    }

    return filteredTracks;
  }

  async deleteOne(id) {
    return await this.delete(`${id}`)
  }

  async updateOne(id, data) {
    return await this.put(`${id}`, {...data})
  }

  async createOne(data) {
    return await this.post('', {...data})
  }

  async getOne(id) {
    return await this.get(`${id}`)
  }

} 