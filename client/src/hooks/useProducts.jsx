import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import useAuthContext from './useAuthContext';

const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuth } = useAuthContext();

  const fetchProducts = () => {
    if (isAuth) {
      axios
        .get('/api/product/all')
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error('Error al cargar los productos:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(fetchProducts, [isAuth]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        isLoading,
        fetchProducts,
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
