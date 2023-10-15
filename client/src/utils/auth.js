import axios from 'axios';

const LOGIN_ENDPOINT = 'api/signin';

const getUser = async (email, password) => {
  const response = await axios.post(LOGIN_ENDPOINT, {
    email,
    password,
  });

  return response.data;
};

export const authenticateUser = async (email, password) => {
  const { token } = await getUser(email, password);
  return { token };
};
