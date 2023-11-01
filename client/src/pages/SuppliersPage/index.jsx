import { SearchBar } from '../../components/SearchBar';
import { EditIcon, FilterIcon, MoreOptionsIcon } from '../../components/Icons';
import { Button } from '../../components/ui/Button';
import { ChevronLeft } from 'react-feather';
import { ChevronRight } from 'react-feather';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import DeleteItem from '../../components/Modals/DeleteItem';
import RemovedMessage from '../../components/RemovedMessage';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import Loading from '../../components/Loading';

const SuppliersPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searching, setSearching] = useState('');

  const [alertDelete, setAlertDelete] = useState(false);
  const [removedmsg, setRemovedmsg] = useState(false);

  useEffect(() => {
    axios
      .get('/api/supplier/all')
      .then((response) => {
        setSuppliers(response.data.body);
      })
      .catch((error) => {
        console.error('Error al cargar los Proveedores:', error);
      });
  }, []);

  const supplierFound = suppliers.filter((supplier) => 
    supplier.name.toLowerCase().includes((searching.toLowerCase()))
  );

  setTimeout(() => {
    setRemovedmsg(false);
  }, 2500)

  return (
    <>
      <div className='hidden sm:flex flex-row justify-between text-custom-black'>
        <h2>Inventario</h2>
        <h2>Digital Express</h2>
      </div>

      <hr className='hidden sm:flex border-t-1 border-[#898AA3] mb-3' />

      <p className='text-2xl font-[500] text-custom-icon'>Proveedores</p>

      <div className='flex justify-between gap-2 my-5'>
        <SearchBar placeholder='Buscar ítem' className='w-full sm:w-[424px]' searching={searching} setSearching={setSearching} searchTye='suppliers' suppliers={suppliers}>
          <button className='hidden sm:flex p-2 hover:bg-[#B8B9CF] rounded-full transition w-8 h-8'>
            <FilterIcon />
          </button>
        </SearchBar>
        <Link to='/addproduct'>
          <Button className='text-xs min-w-[100px]'>Agregar Ítem</Button>
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
            {supplierFound.length > 0 ? (
              supplierFound.map((item) => (
                <tr
                  key={item.id}
                  className='border-b sm:border-b-4 border-custom-button-hover last:border-b-0'
                >
                  <td className='px-5 py-1 flex items-center min-w-[168px]'>
                    <img
                      width={50}
                      className='inline-block mr-2'
                      src='/images/media.png'
                    />
                    {item.name}
                  </td>
                  <td className='px-5 py-1'>1</td>
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
                                <button
                                  className={`text-left px-4 py-2 ${
                                    active ? 'hover:text-custom-blue' : ''
                                  }`}
                                >
                                  Editar
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {(active) => (
                                <button
                                  className={`text-left px-4 py-2 ${
                                    active ? 'hover:text-custom-blue' : ''
                                  }`}
                                  onClick={() => setAlertDelete(true)}
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
              ))
            ) : (
              <tr className='w-full'>
                <td colSpan='4' className=' text-center p-5'>
                  No se encontraron proveedores relacionados
                </td>
              </tr>
              )
            }
          </tbody>
        </table>
        <DeleteItem alertDelete={alertDelete} setAlertDelete={setAlertDelete} setRemovedmsg={setRemovedmsg}/>
      </div>
      {/* message component, has been removed */}
      {removedmsg && <RemovedMessage />}
      {/* Pagination */}
      <footer className='flex items-center flex-wrap gap-3 justify-center sm:justify-end mt-7'>
        <span className='text-[#1A1A1A]'>{`Total ${suppliers.length} Ítems`}</span>
        <nav>
          <ul className='flex items-center gap-3'>
            <li>
              <Button className='w-8 h-8 sm:p-1 rounded-md bg-[#B4B4B4]'>
                <ChevronLeft className='text-[#626265]' />
              </Button>
            </li>
            <li>
              <Button className='w-8 h-8 sm:px-3 sm:py-1.5 rounded-md border border-transparent bg-[#918AC1] text-sm'>
                1
              </Button>
            </li>
            {Array(5)
              .fill(0)
              .map((_, index) => {
                const page = index + 2;
                return (
                  <li key={page}>
                    <Button className='w-8 h-8 sm:px-3 sm:py-1.5 rounded-md bg-transparent border border-[#918AC1] text-custom-black text-sm'>
                      {page}
                    </Button>
                  </li>
                );
              })}
            <li>
              <Button className='w-8 h-8 sm:p-1 rounded-md'>
                <ChevronRight />
              </Button>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default SuppliersPage;
