import { SearchBar } from '../../components/SearchBar';
import { EditIcon, MoreOptionsIcon } from '../../components/Icons';
// import { FilterIcon } from '../../components/Icons';
// import { X } from 'react-feather';
import { buttonVariants } from '../../components/ui/Button';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSuppliers } from '../../hooks/useSuppliers';
import { cn } from '../../utils/cn';
import { serviceDeleteSupplier } from '../../services/suppliers/suppliers';

import DeleteItem from '../../components/Modals/DeleteItem';
import RemovedMessage from '../../components/RemovedMessage';
import { X } from 'react-feather';

//import Loading from '../../components/Loading';

const SuppliersPage = () => {
  const { suppliers, setSuppliers } = useSuppliers();
  const [search, setSearch] = useState('');

  const [alertDelete, setAlertDelete] = useState(false);
  const [removedmsg, setRemovedmsg] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const handleSearchChange = (e) => setSearch(e.target.value);
  const clearSearch = () => setSearch('');

  const [searching, setSearching] = useState('');

  const supplierFound = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searching.toLowerCase()),
  );

  const handleDeleteSupplier = async (id) => {
    try {
      await serviceDeleteSupplier(id);
      setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (removedmsg) {
      const timeout = setTimeout(() => {
        setRemovedmsg(false);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [removedmsg]);

  return (
    <>
      <div className='hidden sm:flex flex-row justify-between text-custom-black'>
        <h2>Inventario</h2>
        <h2>Digital Express</h2>
      </div>

      <hr className='hidden sm:flex border-t-1 border-[#898AA3] mb-3' />

      <p className='text-2xl font-[500] text-custom-icon'>Proveedores</p>

      <div className='flex justify-between gap-2 my-5'>
        <SearchBar
          placeholder='Buscar...'
          className='w-full sm:w-[424px]'
          searching={searching}
          setSearching={setSearching}
          searchTye='suppliers'
          products={suppliers}
        >
          <button
            className='hidden sm:flex p-2 items-center hover:bg-[#B8B9CF] rounded-full transition w-8 h-8'
            onClick={clearSearch}
          >
            {/* <X strokeWidth={3} /> */}
          </button>
        </SearchBar>
        <Link
          to='/addsupplier'
          className={cn(buttonVariants(), 'text-xs text-center min-w-[100px]')}
        >
          Agregar Proveedor
        </Link>
      </div>

      <div className='border sm:border-4 rounded-xl border-custom-button-hover'>
        <table className='w-full text-[#1A1A1A]'>
          <thead>
            <tr className='text-left'>
              <th className='bg-custom-button-hover min-w-[168px] rounded-tl-lg sm:rounded-tl-md px-5 py-3'>
                Proveedor
              </th>
              {/* <th className='bg-custom-button-hover hidden md:table-cell px-5 py-3'>
                Código
              </th> */}
              <th className='bg-custom-button-hover px-5 py-3'>Items</th>
              <th className='bg-custom-button-hover rounded-tr-lg sm:rounded-tr-md px-5 py-3 text-center'>
                Acción
              </th>
            </tr>
          </thead>

          <tbody>
            {supplierFound.map((supplier) => (
              <tr
                key={supplier.id}
                className='border-b sm:border-b-4 border-custom-button-hover last:border-b-0'
              >
                <td className='px-5 py-3 flex items-center min-w-[168px]'>
                  {supplier.name}
                </td>
                <td className='px-5 py-1'>{supplier.count}</td>
                <td className='px-5 py-1'>
                  <div className='flex items-center justify-center'>
                    <Menu as='div' className='relative'>
                      <Menu.Button
                        aria-label='Mas opciones'
                        className='text-custom-blue'
                      >
                        <EditIcon className='hidden sm:inline-block' />
                        <MoreOptionsIcon className='sm:hidden' />
                      </Menu.Button>

                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute top-full mt-2 right-0 bg-[#E7E7E7] flex flex-col rounded shadow z-10 min-w-[130px]'>
                          <Menu.Item>
                            {(active) => (
                              <Link
                                to={`/suppliers/edit/${supplier.id}`}
                                className={`text-left px-4 py-2 ${
                                  active ? 'hover:text-custom-blue' : ''
                                }`}
                              >
                                Editar
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {(active) => (
                              <button
                                onClick={() => {
                                  setDeleteId(supplier.id);
                                  setAlertDelete(true);
                                }}
                                className={`text-left px-4 py-2 ${
                                  active ? 'hover:text-custom-blue' : ''
                                }`}
                              >
                                Eliminar
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <DeleteItem
          alertDelete={alertDelete}
          setAlertDelete={setAlertDelete}
          setRemovedmsg={setRemovedmsg}
          onClickCallback={() => handleDeleteSupplier(deleteId)}
        />
      </div>
      {removedmsg && <RemovedMessage />}
    </>
  );
};

export default SuppliersPage;
