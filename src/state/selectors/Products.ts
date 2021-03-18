import { AppState } from './../store';
export const allProductsSelector = (state: AppState) => state.products.products;
