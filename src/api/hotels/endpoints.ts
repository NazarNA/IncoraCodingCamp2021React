import { IHotels } from './../../models/hotels';
import { GetHotelsResponse, PostHotelResponse } from './types';
import Axios from './../axios';

export const getHotels = (): Promise<GetHotelsResponse> => {
  return Axios.instance.get('/hotel');
};

export const postHotels = (hotel: IHotels): Promise<PostHotelResponse> => {
  return Axios.instance.post('/hotel', hotel);
};
