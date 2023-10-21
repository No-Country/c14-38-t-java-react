import { useEffect, useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenStorage = localStorage.getItem('token');
    if (tokenStorage) {
      setToken(tokenStorage);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
