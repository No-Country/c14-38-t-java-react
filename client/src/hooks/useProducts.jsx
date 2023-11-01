import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import useAuthContext from './useAuthContext';
import productsData from '../data/productsData';

const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { isAuth } = useAuthContext();

  useEffect(() => {
    if (isAuth) {
      // axios
      //   .get('/api/product/all')
      //   .then((response) => {
      //     setProducts(response.data.body);
      //   })
      //   .catch((error) => {
      //     console.error('Error al cargar los productos:', error);
      //   });

      setProducts(productsData); // Fake data
    }
  }, [isAuth]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }

  return context;
};