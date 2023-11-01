import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import useAuthContext from './useAuthContext';
import suppliersData from '../data/suppliersData';

const SuppliersContext = createContext();

export const SuppliersProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  const { isAuth } = useAuthContext();

  useEffect(() => {
    if (isAuth) {
      // axios
      //   .get('/api/supplier/all')
      //   .then((response) => {
      //     setSuppliers(response.data);
      //   })
      //   .catch((error) => {
      //     console.error('Error al cargar los proveedores:', error);
      //   });

      setSuppliers(suppliersData); // Fake data
    }
  }, [isAuth]);

  return (
    <SuppliersContext.Provider
      value={{
        suppliers,
        setSuppliers,
      }}
    >
      {children}
    </SuppliersContext.Provider>
  );
};

export const useSuppliers = () => {
  const context = useContext(SuppliersContext);

  if (!context) {
    throw new Error('useSuppliers must be used within a SuppliersProvider');
  }

  return context;
};
