import { IProduct } from '../components/Products/ProductList';
import { initialStateType } from '../App';

type ActionTypeRemove = {
  type: string;
  payload: number;
};

type ActionTypeAdd = {
  type: string;
  payload: IProduct;
};

export type ProductAction = ActionTypeRemove | ActionTypeAdd;

enum ProductActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
}

export const rootReducer = (state: initialStateType, action: ProductAction): initialStateType => {
  switch (action.type) {
    case ProductActionTypes.ADD_TO_CART:
      return {
        ...state,
        productsInCart: [...state.productsInCart, { ...(action.payload as IProduct) }]
      };
    case ProductActionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        productsInCart: state.productsInCart.filter((product: IProduct) => product.id !== action.payload)
      };
    default:
      return state;
  }
};
