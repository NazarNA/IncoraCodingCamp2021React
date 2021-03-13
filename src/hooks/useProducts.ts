import { useState, useMemo, useCallback } from 'react';
import { productsArray, IProduct } from './ProductsList';

interface IFilterOptions {
  name?: string;
  priceMore?: number;
  priceLess?: number;
}

interface IProducts {
  perPage: number;
}

const useProducts = ({ perPage }: IProducts) => {
  const [productsList, setProductsList] = useState<IProduct[]>(productsArray);
  const [page, setPage] = useState<number>(1);

  const total = useMemo(() => Math.ceil(productsList.length / perPage), [perPage, productsList]);

  let products = useMemo(() => {
    const indexOfLast = page * perPage;
    const indexOfFirst = indexOfLast - perPage;
    return productsList.slice(indexOfFirst, indexOfLast);
  }, [page, perPage, productsList]);

  const addProduct = (name: string, price: number): void => {
    setProductsList([
      ...productsList,
      {
        id: Date.now(),
        name,
        price
      }
    ]);
  };

  const deleteProduct = (id: number): void => {
    setProductsList(productsList.filter(product => product.id !== id));
  };

  const editProduct = (edit: IProduct): void => {
    setProductsList(
      productsList.map(product => (edit.id === product.id ? { ...product, ...edit } : product))
    );
  };

  const changePage = useCallback(
    (p: number): void => {
      setPage(p);
    },
    [setPage]
  );

  const applyFilter = useCallback(
    (filterOptions: IFilterOptions): void => {
      filterOptions.name
        ? setProductsList(
            productsList.filter((product: IProduct) => product.name.includes(filterOptions.name!))
          )
        : setProductsList(productsArray);

      if (filterOptions.priceMore) {
        setProductsList(productsList.filter((item: IProduct) => item.price >= filterOptions.priceMore!));
      }

      if (filterOptions.priceLess) {
        setProductsList(productsList.filter((item: IProduct) => item.price <= filterOptions.priceLess!));
      }
    },
    [productsList]
  );

  return {
    products,
    page,
    total,
    changePage,
    applyFilter,
    editProduct,
    deleteProduct,
    addProduct
  };
};

export default useProducts;
