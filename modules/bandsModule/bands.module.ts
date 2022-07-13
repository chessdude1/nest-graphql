//@ts-nocheck

import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export class BandsModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_BASEAPI_URL;
  }

  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getAllBands({ limit, offset }) {
    const response = await this.get('');
    let filteredBands = response.item;
    if (offset) {
      filteredBands = filteredBands.slice(offset);
    }
    if (limit) {
      filteredBands = filteredBands.slice(0, limit);
    }

    return filteredBands;
  }

  async createOne(members, genresIds, name) {
    return await this.post('', { members, genresIds, name });
  }

  async getOne(id) {
    return await this.get(`${id}`);
  }

  async deleteOne(id) {
    return await this.delete(`${id}`);
  }

  async updateOne(id, args) {
    return await this.put(`${id}`, { ...args });
  }
}
