import { GetWeatherResponse } from './types';
import Axios from '../axios';

const KEY: string = '3401d90e0fcc7ce1b9e947bff142c7aa';

export const getWeather = (city: string): Promise<GetWeatherResponse> => {
  return Axios.instance.get(`?q=${city}&appid=${KEY}`);
};
