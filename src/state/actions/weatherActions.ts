import { AnyAction, Dispatch } from 'redux';
import { getWeather } from '../../api/weather';
import { WeatherTypes } from './weatherTypes';

export const getWeatherAction = (city: string) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({
    type: WeatherTypes.REQUEST_WEATHER_BEGGIN
  });

  try {
    const res = await getWeather(city);

    dispatch({
      type: WeatherTypes.REQUEST_WEATHER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: WeatherTypes.REQUEST_WEATHER_FAIL,
      payload: err
    });
  }
};
