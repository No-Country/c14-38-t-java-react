import { NavLink, useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import { logoutUser } from '../../utils/auth';
import { Package, LogOut, Truck } from 'react-feather';
import menuData from '../../data/menuData';

function Sidebar() {
  // #### Logout
  const navigate = useNavigate();
  const { setToken } = useAuthContext();
  const handleLogout = () => {
    setToken(null);
    logoutUser();
    navigate('/login');
  };
  //   ####

  const classButton = ({ isActive }) =>
    isActive
      ? 'p-3 flex flex-row bg-custom-button-hover rounded-lg mb-1'
      : 'p-3 flex flex-row hover:bg-custom-button-hover rounded-lg mb-1';

  return (
    <main className='hidden md:block flex-grow w-1/4 bg-custom-panel p-4 m-2.5 rounded-lg'>
      <div className='flex flex-col'>
        {menuData.map((item) => (
          <NavLink key={item.id} to={item.navigate} className={classButton}>
            {item.icon === 'Package' && <Package color={item.iconColor} />}
            {item.icon === 'Truck' && <Truck color={item.iconColor} />}
            {item.name}
          </NavLink>
        ))}

        <button
          onClick={handleLogout}
          className='p-3 flex flex-row hover:bg-custom-button-hover rounded-lg'
        >
          <LogOut color='#3E43C7' />
          <span className='ml-1'>Cerrar Sesión</span>
        </button>
      </div>
    </main>
  );
}

export default Sidebar;
