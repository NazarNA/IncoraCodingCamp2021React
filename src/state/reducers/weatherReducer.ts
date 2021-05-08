import { WeatherTypes, PageTypes } from './../actions/weatherTypes';

const initialState = {
  loading: false,
  weather: {},
  page: 0
};

export const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WeatherTypes.REQUEST_WEATHER_BEGGIN:
      return { ...state, loading: true };
    case WeatherTypes.REQUEST_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload
      };
    case WeatherTypes.REQUEST_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        weather: action.payload
      };
    case PageTypes.NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case PageTypes.PREV_PAGE:
      return {
        ...state,
        page: state.page - 1
      };
    default:
      return state;
  }
};
