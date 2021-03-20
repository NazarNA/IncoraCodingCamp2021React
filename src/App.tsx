import React, { useReducer } from 'react';

import './App.scss';

import Products from './components/Products/Products';
import { IProduct } from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import { ProductAction, rootReducer } from './rootReducer/rootReducer';

export type initialStateType = {
  productsInCart: IProduct[];
};

const initialState: initialStateType = {
  productsInCart: []
};

export const CartContext = React.createContext<{
  state: initialStateType;
  dispatch: (action: ProductAction) => void;
}>({
  state: initialState,
  dispatch: () => {}
});

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <div className='App'>
      <CartContext.Provider value={{ state, dispatch }}>
        <Products />
        <Cart />
      </CartContext.Provider>
    </div>
  );
}

export default App;
