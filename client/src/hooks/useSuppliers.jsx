import { createContext, useContext, useEffect, useState } from 'react';
import useAuthContext from './useAuthContext';
import { serviceGetSuppliers } from '../services/suppliers/suppliers';
import axios from 'axios';
// import suppliersData from '../data/suppliersData';

const SupplierContext = createContext();

const supplierCount = async (id) => {
  try {
    const response = await axios.get(`/api/product/all?supplier_id=${id}`);
    return response.data.length;
  } catch (error) {
    return 0;
  }
};

export const SuppliersProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAuth } = useAuthContext();

  useEffect(() => {
    let suppliersLocal = [];
    if (isAuth) {
      serviceGetSuppliers()
        .then((response) => {
          // setSuppliers(response.data);

          suppliersLocal = response.data;
          const updateSuppliers = async () => {
            const updatedSupplier = await Promise.all(
              suppliersLocal.map(async (supplier) => {
                const count = await supplierCount(supplier.id);
                return { ...supplier, count };
              }),
            );

            setSuppliers(updatedSupplier);
          };
          updateSuppliers();
        })
        .catch((error) => {
          console.error('Error al cargar los proveedores:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    // setSuppliers(updatedSupplier);
    // console.log(updateSuppliers);
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
