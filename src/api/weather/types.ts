import { AxiosResponse } from 'axios';
export interface IWeather {
  city: object;
  list: Array<object>;
}

interface PaginationResponse<T> {
  config: object;
  data: T;
  headers: object;
  request: object;
  status: number;
  statusText: string;
  message: number;
  cnt: number;
  cod: string;
}

export type GetWeatherResponse = AxiosResponse<PaginationResponse<IWeather>>;
