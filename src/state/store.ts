import { combineReducers, createStore } from 'redux';
import { ProductsReducer } from './reducers/ProductsReducer';

const rootReducer = combineReducers({
  products: ProductsReducer
});

export const store = createStore(rootReducer);

export type AppState = ReturnType<typeof rootReducer>;
