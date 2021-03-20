import React, { useContext } from 'react';
import { CartContext } from '../../App';
import { IProduct } from '../Products/ProductList';

import css from './Cart.module.scss';

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const removeProductHandler = (delId: number) => {
    dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', payload: delId });
  };

  return (
    <div className={css.cartWrapper}>
      <div>
        <div style={{ textAlign: 'justify' }}>
          <div>
            Sum:
            {state.productsInCart &&
              state.productsInCart.reduce((sum: number, product: IProduct) => sum + product.price, 0)}
          </div>
          <div>Amount: {state.productsInCart.length}</div>
        </div>
        {state.productsInCart &&
          state.productsInCart
            .sort((a: IProduct, b: IProduct) => a.name.localeCompare(b.name))
            .map((product: IProduct, idx: number, arr: IProduct[]) => {
              if (idx !== 0 && arr[idx - 1].name === arr[idx].name) return;
              return (
                <div className={css.cartItem}>
                  <p>{product.name}</p>
                  <p>{state.productsInCart.filter((el: IProduct) => el.name === product.name).length}</p>
                  <button onClick={() => removeProductHandler(product.id)}>Del</button>
                </div>
              );
            })}
      </div>
    </div>
  );
}
