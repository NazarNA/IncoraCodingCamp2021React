import React, { useContext } from 'react';
import { IProduct, products } from './ProductList';
import { CartContext } from '../../App';

import css from './Products.module.scss';

export default function Products() {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      {products.map((product: IProduct) => (
        <div className={css.productWrapper} key={product.id}>
          <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          <div>
            <button
              onClick={() => {
                console.log(product);

                dispatch({
                  type: 'ADD_TO_CART',
                  payload: { ...product, id: Date.now() }
                });
              }}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
