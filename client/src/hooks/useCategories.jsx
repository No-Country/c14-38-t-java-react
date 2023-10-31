import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import useAuthContext from './useAuthContext';
import categoriesData from '../data/categoriesData';

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const { isAuth } = useAuthContext();

  useEffect(() => {
    if (isAuth) {
      // axios
      //   .get('/api/family')
      //   .then((response) => {
      //     setCategories(response.data);
      //   })
      //   .catch((error) => {
      //     console.error('Error al cargar las categorias:', error);
      //   });

      setCategories(categoriesData); // Fake data
    }
  }, [isAuth]);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }

  return context;
};
