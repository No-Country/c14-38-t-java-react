const BACKEND_BASE_URL =
  import.meta.env.BACKEND_BASE_URL || 'https://fakestockwise.com/';

const ENDPOINT = 'v1/users';

const getUser = async (email, password) => {
  const res = await fetch(`${BACKEND_BASE_URL}/${ENDPOINT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  return await res.json();
};

export const authenticateUser = async (email, password) => {
  // const { token } = await getUser(email, password);
  // return { token };
  return Promise.resolve({ token: 'miTokenSecretoEs123456789' });
};
