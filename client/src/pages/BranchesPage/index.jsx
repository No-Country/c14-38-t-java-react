import { Link } from 'react-router-dom';
import { Package, LogOut, Truck, User } from 'react-feather';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

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

  return (
    <div className="flex flex-col h-screen text-custom-blue">
      <header className="flex flex-row justify-between items-center p-4">
        <Link>
          <h1 className="text-4xl font-semibold bg-blue-gradient text-transparent bg-clip-text">
            Stockwise
          </h1>
        </Link>
        <Menu as="div" className="relative ml-3">
          <Menu.Button className="flex items-center rounded-full bg-gray-800 text-sm">
            <div className="flex justify-center items-center h-16 w-16 rounded-full bg-custom-panel">
              <User size={38} />
            </div>
          </Menu.Button>

          <Transition as={Fragment}>
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
              <Link
                to="/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
              >
                uno
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
              >
                dos
              </Link>
            </Menu.Items>
          </Transition>
        </Menu>
      </header>

      <div className="flex flex-row h-screen text-xl">
        <main className="flex-grow w-1/4 bg-custom-panel p-4 m-2.5 rounded-lg">
          <div className="flex flex-col">
            <Link className="p-3 flex flex-row hover:bg-custom-button-hover rounded-lg">
              <Package color="#3E43C7" />
              <span className="ml-1">Inventario</span>
            </Link>

            <Link className="p-3 flex flex-row hover:bg-custom-button-hover rounded-lg">
              <Truck color="#3E43C7" />
              <span className="ml-1">Despacho</span>
            </Link>

            <Link className="p-3 flex flex-row hover:bg-custom-button-hover rounded-lg">
              <LogOut color="#3E43C7" />
              <span className="ml-1">Cerrar Sesión</span>
            </Link>
          </div>
        </main>
        <main className="flex-grow w-3/4 bg-custom-panel p-4 m-2.5 rounded-lg">
          <div className="flex flex-row justify-between text-custom-black">
            <h2>Inventario</h2>
            <h2>Digital Express</h2>
          </div>
          <hr className="border-t-1 border-[#898AA3] mb-3" />
          <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default BranchesPage;
