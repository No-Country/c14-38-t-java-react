import { createContext, useContext, useEffect, useState } from 'react';
import useAuthContext from './useAuthContext';
import { serviceGetCategories } from '../services/categories/categories';
import axios from 'axios';
// import categoriesData from '../data/categoriesData';

const FamilyContext = createContext();

const familyCount = async (id) => {
  try {
    const response = await axios.get(`/api/product/all?family_id=${id}`);
    return response.data.length;
  } catch (error) {
    return 0;
  }
};

export const FamiliesProvider = ({ children }) => {
  const [families, setFamilies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuth } = useAuthContext();

  useEffect(() => {
    let familiesLocal = [];
    if (isAuth) {
      serviceGetCategories()
        .then((response) => {
          // setFamilies(response.data);
          familiesLocal = response.data;
          const updateFamilies = async () => {
            const updatedFamily = await Promise.all(
              familiesLocal.map(async (family) => {
                const count = await familyCount(family.id);
                return { ...family, count };
              }),
            );

            setFamilies(updatedFamily);
          };
          updateFamilies();
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
