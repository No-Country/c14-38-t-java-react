import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/product/all')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
      });
  }, []);

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
