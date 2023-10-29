import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import useAuthContext from './useAuthContext';

const SupplierContext = createContext();

export const SuppliersProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuth } = useAuthContext();

  useEffect(() => {
    if (isAuth) {
      axios
        .get('/api/supplier/all')
        .then((response) => {
          setSuppliers(response.data);
        })
        .catch((error) => {
          console.error('Error al cargar los proveedores:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isAuth]);

  return (
    <SupplierContext.Provider
      value={{
        suppliers: suppliers,
        setSuppliers: setSuppliers,
        isLoading,
      }}
    >
      {children}
    </SupplierContext.Provider>
  );
};

export const useSuppliers = () => {
  const context = useContext(SupplierContext);

  if (!context) {
    throw new Error('useSuppliers must be  used within a SuppliersProvider');
  }

  return context;
};
