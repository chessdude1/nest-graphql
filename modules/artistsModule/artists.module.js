import { RESTDataSource } from "apollo-datasource-rest";
import 'dotenv/config'

export class ArtistsModule extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = ''
  }
}