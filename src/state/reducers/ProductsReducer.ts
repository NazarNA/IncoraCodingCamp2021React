import * as Types from '../actions/Types';

const initialState = {
  products: [{ name: 'apple', price: 50 }]
};

export const ProductsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    default:
      return state;
  }
};
