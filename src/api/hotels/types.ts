import { IHotels } from './../../models/hotels';
import { AxiosResponse } from 'axios';
// import { PaginationResponse } from './../../models/api';

export type GetHotelsResponse = AxiosResponse<PaginationResponse<IHotels>>;

export type PostHotelResponse = AxiosResponse<{ message: string; objectId: number; statusCode: number }>;

export interface PaginationResponse<T> {
  items: T[];
  itemsCount: number;
  total: number;
  page: null;
  maxPage: null;
}
