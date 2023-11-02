import axios from 'axios';

export const serviceGetProducts = async () => {
  return await axios.get('/api/product/all');
};

export const serviceCreateProduct = async (payload) => {
  return await axios.post('/api/product', payload);
};

export const serviceEditProduct = async (payload) => {
  return await axios.patch(`/api/product/update`, payload);
};

export const serviceDeleteProduct = async (id) => {
  return await axios.delete(`/api/product/${id}`);
};
