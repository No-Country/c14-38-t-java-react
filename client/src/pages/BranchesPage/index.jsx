import { Link } from 'react-router-dom';
import { Package, LogOut, Truck, User, ArrowRight } from 'react-feather';
import { Menu, Transition, Popover, Dialog } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import useAuthContext from '../../hooks/useAuthContext';
//import Loading from '../../components/Loading';

const BranchesPage = () => {
  const products = [
    {
      id: 123,
      imageSrc:
        'https://www.fundacionaquae.org/wp-content/uploads/2023/07/peces_en_un_arrecife_de_coral__credito_pixabay_joakant.jpg',
      imageAlt: 123,
      href: 123,
      name: 'primero',
      color: 'rojo',
      price: 1200,
    },
    {
      id: 124,
      imageSrc:
        'https://www.fundacionaquae.org/wp-content/uploads/2023/07/peces_en_un_arrecife_de_coral__credito_pixabay_joakant.jpg',
      imageAlt: 123,
      href: 123,
      name: 'segundo',
      color: 'verde',
      price: 123,
    },
  ];

  const { logout: handleLogout } = useAuthContext();


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen text-custom-blue">
      <header>
        <nav
          className="mx-auto flex w-full items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/">
              <h1 className="text-4xl font-semibold bg-blue-gradient text-transparent bg-clip-text">
                Stockwise
              </h1>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12"></Popover.Group>
          <div className="hidden md:flex md:flex-1 md:justify-end">
            <Menu as="div" className="relative text-left hidden md:block">
              <div>
                <Menu.Button>
                  <div className="flex justify-center items-center h-16 w-16 rounded-full bg-custom-panel">
                    <User size={38} />
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-custom-button-hover' : ''
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Perfil
                        </button>
                      )}
                    </Menu.Item>
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
          as="div"
          className="md:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="text-sm bg-[#F0F0F0] fixed inset-y-0 right-0 z-10 w-1/2 overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div></div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-5">
                  <Link
                    href="#"
                    className="-mx-3 block hover:bg-custom-button-hover rounded-lg px-3 py-1.5  leading-7 text-gray-900 "
                  >
                    Inventario
                  </Link>
                  <Link
                    href="#"
                    className="-mx-3 block hover:bg-custom-button-hover rounded-lg px-3 py-1.5  leading-7 text-gray-900 "
                  >
                    Despacho
                  </Link>
                </div>
                <div className="py-5">
                  <Link
                    href="#"
                    className="-mx-3 block hover:bg-custom-button-hover rounded-lg px-3 py-1.5 leading-7 text-gray-900 "
                  >
                    Perfil
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left -mx-3 block hover:bg-custom-button-hover rounded-lg px-3 py-1.5 leading-7 text-gray-900 "
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="flex flex-row h-screen">
        <main className="hidden md:block flex-grow w-1/4 bg-custom-panel p-4 m-2.5 rounded-lg">
          <div className="flex flex-col">
            <Link className="p-3 flex flex-row hover:bg-custom-button-hover rounded-lg">
              <Package color="#3E43C7" />
              <span className="ml-1">Inventario</span>
            </Link>

            <Link className="p-3 flex flex-row hover:bg-custom-button-hover rounded-lg">
              <Truck color="#3E43C7" />
              <span className="ml-1">Despacho</span>
            </Link>

            <button
              onClick={handleLogout}
              className="p-3 flex flex-row hover:bg-custom-button-hover rounded-lg"
            >
              <LogOut color="#3E43C7" />
              <span className="ml-1">Cerrar Sesión</span>
            </button>
          </div>
        </main>
        <main className="flex-grow w-3/4 bg-custom-panel p-4 m-2.5 rounded-lg">
          <div className="flex flex-row justify-between text-custom-black">
            <h2>Inventario</h2>
            <h2>Digital Express</h2>
          </div>
          <hr className="border-t-1 border-[#898AA3] mb-3" />

          <div className="text-custom-white mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group flex bg-blue-card rounded">
                <div
                  key={product.id}
                  className="p-3 aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none h-24 sm:h-28 lg:h-32 "
                >
                  <h1>Sucursal Norte</h1>
                  <p>1200</p>
                  <h2>Productos</h2>
                </div>
                <div className="p-4 items-end flex">
                  <Link
                    to="/branches/norte"
                    className="flex items-center justify-center bg-blue-gradient text-white rounded w-9 h-9"
                  >
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BranchesPage;
