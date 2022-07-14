import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';
import { Band, IBandInternal } from "./bands.types";

export class BandsModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_BASEAPI_URL;
  }

  willSendRequest(request : RequestOptions) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getAllBands( limit =5, offset =0  ) {
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

  async createOne(data : Omit<Band, '_id'>) {
    return await this.post('', { ...data });
  }

  async getOne(id : string) {
    return await this.get(`${id}`);
  }

  async deleteOne(id : string) {
    return await this.delete(`${id}`);
  }

  async updateOne(id : string, args : Omit<Band, '_id'>) {
    return await this.put(`${id}`, { ...args });
  }
}
