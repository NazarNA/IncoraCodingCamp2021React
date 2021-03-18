import React, { useState } from 'react';
import useProducts from './hooks/useProducts';
import './App.scss';
import ProductItem from './components/ProductItem';
import TestPage from './components/TestPage';

function App() {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const {
    products,
    page,
    total,
    changePage,
    applyFilter,
    editProduct,
    deleteProduct,
    addProduct
  } = useProducts({ perPage: 5 });

  const addProductHandler = () => {
    if (name && price) {
      addProduct(name, price);
      setName('');
      setPrice(0);
    }
  };

  return (
    <div className='productsWrapper'>
      <h1>Products</h1>
      <div className='productsWrapper'>
        <input type='text' placeholder='Name' onChange={e => setName(e.target.value)} value={name} />
        <input type='number' placeholder='Price' onChange={e => setPrice(+e.target.value)} value={price} />
        <button className='addBtn' onClick={addProductHandler}>
          Add
        </button>
        <button onClick={() => applyFilter({ priceMore: 10 })}>More then 10</button>
        <button onClick={() => applyFilter({ priceLess: 10 })}>Less then 10</button>
        <button onClick={() => editProduct({ id: 1, name: 'APPLE', price: 999 })}>Edit Apple</button>
        <input
          placeholder='search by name'
          type='text'
          onChange={e => applyFilter({ name: e.target.value })}
        />
      </div>
      {products.map((product, idx) => (
        <div key={idx} className='productItem'>
          <ProductItem
            name={product.name}
            price={product.price}
            id={product.id}
            deleteProduct={deleteProduct}
            editProduct={editProduct}
          />
        </div>
      ))}
      <div className='paginationWrapper'>
        {Array.from({ length: total }).map((page, index) => (
          <button key={index} className='paginationItem' onClick={() => changePage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <TestPage />
    </div>
  );
}

export default App;
