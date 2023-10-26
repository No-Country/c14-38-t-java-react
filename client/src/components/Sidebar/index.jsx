import { NavLink } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import { Package, LogOut, Truck, Grid, Users } from 'react-feather';
import menuData from '../../data/menuData';

function Sidebar() {
  // #### Logout
  const { logout: handleLogout } = useAuthContext();

  //   ####

  const classButton = ({ isActive }) =>
    isActive
      ? 'p-3 flex gap-2 flex-row bg-custom-button-hover rounded-lg mb-1'
      : 'p-3 flex gap-2 flex-row hover:bg-custom-button-hover rounded-lg mb-1';

  return (
    <aside className='hidden md:block w-[356px] bg-custom-panel p-4 m-2.5 rounded-lg'>
      <div className='flex flex-col'>
        {menuData.map((item) => (
          <NavLink key={item.id} to={item.navigate} className={classButton}>
            {item.icon === 'Package' && <Package color={item.iconColor} />}
            {item.icon === 'Truck' && <Truck color={item.iconColor} />}
            {item.icon === 'Grid' && <Grid color={item.iconColor} />}
            {item.icon === 'Users' && <Users color={item.iconColor} />}
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
    </aside>
  );
}

export default Sidebar;
