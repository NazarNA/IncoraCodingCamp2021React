import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../state/actions/Products';
import { allProductsSelector } from '../state/selectors/Products';
import { AppState } from '../state/store';

const TestPage = () => {
  const products = useSelector<AppState>(allProductsSelector);
  const dispatch = useDispatch();
  console.log(products);

  const addProductHandler = () => {
    dispatch(addProduct({ name: 'lemon', id: Date.now() }));
  };

  return (
    <div>
      <button onClick={addProductHandler}>Add product</button>
    </div>
  );
};

export default TestPage;
