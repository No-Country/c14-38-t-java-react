import { createContext, useContext, useEffect, useState } from 'react';
import useAuthContext from './useAuthContext';
import { serviceGetCategories } from '../services/categories/categories';
// import categoriesData from '../data/categoriesData';

const FamilyContext = createContext();

export const FamiliesProvider = ({ children }) => {
  const [families, setFamilies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuth } = useAuthContext();

  useEffect(() => {
    if (isAuth) {
      serviceGetCategories()
        .then((response) => {
          setFamilies(response.data);
        })
        .catch((error) => {
          console.error('Error al cargar las categorías:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isAuth]);

  return (
    <FamilyContext.Provider
      value={{
        families: families,
        setFamilies: setFamilies,
        isLoading,
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export const useFamilies = () => {
  const context = useContext(FamilyContext);

  if (!context) {
    throw new Error('useFamilies must be  used within a FamiliesProvider');
  }

  return context;
};
