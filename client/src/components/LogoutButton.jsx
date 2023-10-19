import { useNavigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import { logoutUser } from '../utils/auth';

export const LogoutButton = () => {
  const navigate = useNavigate();
  const { setToken } = useAuthContext();

  const handleLogout = () => {
    setToken(null);
    logoutUser();
    navigate('/login');
  };

  return (
    <button className="bg-slate-400 rounded px-2 py-1" onClick={handleLogout}>
      Salir
    </button>
  );
};
