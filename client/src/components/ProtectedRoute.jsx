import { useNavigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import { useEffect } from 'react';

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useAuthContext();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return children;
};
