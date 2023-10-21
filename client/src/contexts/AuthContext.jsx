import axios from 'axios';
import { createContext, useCallback, useMemo, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem('token'),
  );

  const isAuth = useMemo(() => {
    if (authToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }

    return !!authToken;
  }, [authToken]);

  const login = useCallback((token) => {
    localStorage.setItem('token', token);
    setAuthToken(token);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setAuthToken(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuth, authToken, setAuthToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
