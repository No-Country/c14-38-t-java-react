import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';

function LayoutUser() {
  return (
    <div className='flex flex-col h-screen text-custom-blue'>
      <Header />
      <div className='flex flex-row h-full w-full'>
        {/* <Sidebar /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutUser;
