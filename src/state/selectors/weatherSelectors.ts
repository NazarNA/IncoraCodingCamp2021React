import { weatherState } from './../store';

export const getPage = (state: weatherState) => state.page;
export const getState = (state: weatherState) => state.weather;
export const getLoading = (state: weatherState) => state.loading;
export const getError = (state: weatherState) => state.error;
