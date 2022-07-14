import { TDataSources } from "../..";

export interface IPagination {
  limit: number,
  offset: number;
}

export interface IId {
  id: string
}

export type TDataSourcesResolvers = {
  dataSources: TDataSources
}