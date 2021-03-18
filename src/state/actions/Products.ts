import * as Types from './Types';

export const addProduct = (product: any) => {
  return {
    type: Types.ADD_PRODUCTS,
    payload: product
  };
};
