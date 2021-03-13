import React, { useState } from 'react';
import { IProduct } from '../hooks/ProductsList';

import '../App';

interface IProductItem {
  name: string;
  price: number;
  id: number;
  deleteProduct: (id: number) => void;
  editProduct: (edit: IProduct) => void;
}

const ProductItem = ({ name, price, id, deleteProduct }: IProductItem) => {
  const [toggle, setToggle] = useState<boolean>(true);

  const setToggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <>
          <div onClick={setToggleHandler} className='productCell'>
            {name} : {price}
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              deleteProduct(id);
              setToggleHandler();
            }}
          >
            Delete
          </button>
          <button onClick={setToggleHandler}>Back</button>
        </>
      )}
    </>
  );
};

export default ProductItem;
