import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function LayoutUser() {
  return (
    <div className='flex flex-col min-h-screen text-custom-blue'>
      <Header />
      <div className='flex flex-row h-full w-full'>
        <Sidebar />
        <main className='flex-grow sm:bg-custom-panel p-4 sm:m-2.5 rounded-lg'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default LayoutUser;
