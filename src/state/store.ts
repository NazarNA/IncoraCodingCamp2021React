import { weatherReducer } from './reducers/weatherReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(weatherReducer, applyMiddleware(thunk));

export type weatherState = ReturnType<typeof weatherReducer>;
