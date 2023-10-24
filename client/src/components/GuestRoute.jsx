import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';

export const GuestRoute = ({ component }) => {
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/products');
    }
  }, [isAuth, navigate]);

  return !isAuth ? component : null;
};
