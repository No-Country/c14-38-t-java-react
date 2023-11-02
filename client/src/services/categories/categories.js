import axios from 'axios';

export const serviceGetCategories = async () => {
  return await axios.get('/api/family');
};

export const serviceCreateCategory = async (payload) => {
  return await axios.post('/api/family/create', payload);
};

export const serviceEditCategory = async (payload) => {
  return await axios.patch(`/api/family/update`, payload);
};

export const serviceDeleteCategory = async (id) => {
  return await axios.delete(`/api/family/delete/${id}`);
};
