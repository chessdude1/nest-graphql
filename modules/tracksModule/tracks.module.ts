import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ITrackInternal, Track } from "./tracks.types";
import 'dotenv/config';

export class TracksModule extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.TRACKS_BASEAPI_URL
  }

  willSendRequest(request : RequestOptions) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token);
    }
  }

  async getAll(limit =5 , offset = 0) {
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

  async deleteOne(id : string) {
    return await this.delete(`${id}`)
  }

  async updateOne(id : string, data : ITrackInternal) {
    return await this.put(`${id}`, {...data})
  }

  async createOne(data : Omit<Track, '_id'>) {
    return await this.post('', {...data})
  }

  async getOne(id : string) {
    return await this.get(`${id}`)
  }

} 