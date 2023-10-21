import axios from 'axios';

const LOGIN_ENDPOINT = 'api/signin';

export const loginUser = async (email, password) => {
  const response = await axios.post(LOGIN_ENDPOINT, { email, password });
  return response;
};
