import { Fragment, useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, Transition, Popover, Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  Package,
  LogOut,
  Truck,
  Grid,
  Users,
  User,
  Settings,
} from 'react-feather';
import menuData from '../../data/menuData';

function Header() {
  // #### Logout
  const { logout: handleLogout } = useAuthContext();

  //   ####

  const classButton = ({ isActive }) =>
    isActive
      ? 'p-3 flex flex-row bg-custom-button-hover rounded-lg mb-1'
      : 'p-3 flex flex-row hover:bg-custom-button-hover rounded-lg mb-1';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className='w-full border-b-2 border-custom-medium-blue sm:border-b-0'>
        <nav
          className='mx-auto flex w-full items-center justify-between flex-row-reverse md:flex-row p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <Link to='/'>
              <h1 className='text-4xl font-semibold bg-blue-gradient text-transparent bg-clip-text'>
                <span>Stockwise</span>
                {/* <span className='hidden md:block'>Stockwise</span> */}
                {/* <span className='md:hidden'>SW</span> */}
              </h1>
            </Link>
          </div>
          <div className='flex md:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <Popover.Group className='hidden lg:flex lg:gap-x-12'></Popover.Group>
          <div className='hidden md:flex md:flex-1 md:justify-end'>
            <Menu as='div' className='relative text-left hidden md:block'>
              <div>
                <Menu.Button>
                  <div className='flex justify-center items-center h-16 w-16 rounded-full bg-custom-panel'>
                    <img src='/images/user-avatar.png' alt='User avatar' />
                    {/* <User size={38} /> */}
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='px-1 py-1 '>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`${
                            active ? 'bg-custom-button-hover' : ''
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Cerrar Sesión
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
        <Dialog
          as='div'
          className='md:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-10' />
          <Dialog.Panel className='text-sm bg-[#F0F0F0] fixed inset-y-0 left-0 z-10 w-1/2 overflow-y-auto  px-3 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <div></div>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='py-5'>
                  {menuData.map((item) => (
                    <NavLink
                      key={item.id}
                      to={item.navigate}
                      className={classButton}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon === 'Package' && (
                        <Package color={item.iconColor} />
                      )}
                      {item.icon === 'Truck' && (
                        <Truck color={item.iconColor} />
                      )}
                      {item.icon === 'Grid' && <Grid color={item.iconColor} />}
                      {item.icon === 'Users' && (
                        <Users color={item.iconColor} />
                      )}
                      <span className='ml-1'>{item.name}</span>
                    </NavLink>
                  ))}
                  <hr className='mb-1' />

                  <button
                    onClick={handleLogout}
                    className='w-full p-3 flex flex-row hover:bg-custom-button-hover rounded-lg mb-1'
                  >
                    <LogOut color='#3E43C7' />
                    <span className='ml-1'>Cerrar Sesión</span>
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}

export default Header;
