import axios from 'axios';

export const serviceGetSuppliers = async () => {
  return await axios.get('/api/supplier/all');
};

export const serviceCreateSupplier = async (payload) => {
  return await axios.post('/api/supplier', payload);
};

export const serviceEditSupplier = async (payload) => {
  return await axios.patch(`/api/supplier/update`, payload);
};

export const serviceDeleteSupplier = async (id) => {
  return await axios.delete(`/api/supplier/${id}`);
};
