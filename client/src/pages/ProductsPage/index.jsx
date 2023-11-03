import { SearchBar } from '../../components/SearchBar';
import { EditIcon, FilterIcon, MoreOptionsIcon } from '../../components/Icons';
import { Button, buttonVariants } from '../../components/ui/Button';
import { ChevronLeft, X } from 'react-feather';
import { ChevronRight } from 'react-feather';
import { Menu, Transition, Dialog } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { cn } from '../../utils/cn';
import { serviceDeleteProduct } from '../../services/products/products';
import Filter from '../../components/Filter';
import Order from '../../components/Order';
import orderfilter from '../../utils/orderfilter';

import DeleteItem from '../../components/Modals/DeleteItem';
import RemovedMessage from '../../components/RemovedMessage';

//import Loading from '../../components/Loading';

const ProductsPage = () => {
  const { products, setProducts } = useProducts();
  const [search, setSearch] = useState('');

  const [searching, setSearching] = useState('');

  const [alertDelete, setAlertDelete] = useState(false);
  const [removedmsg, setRemovedmsg] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const [selected, setSelected] = useState({
    category: '',
    supplier: '',
    order: '',
  });

  const [productsLocal, setProductsLocal] = useState([]);

  const clearSearch = () => setSearch('');

  const handleDeleteProduct = async (id) => {
    try {
      await serviceDeleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  //Logica de la paginacion
  //contexto (useProducts), obtiene la cantidad total de productos
  const totalProducts = productsLocal.length;

  //*rastrear la página actual - Pagination
  const [currentPage, setCurrentPage] = useState(1);
  //*Agregar una función para manejar el cambio de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  //*cantidad de productos que se desea mostrar por página
  const itemsPerPage = 12;
  //*Calcular el índice del primer y último producto en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  //*Filtrar los productos para mostrar solo los de la página actual
  const productFound = productsLocal.filter((product) =>
    product.name.toLowerCase().includes(searching.toLowerCase()),
  );
  const productsToShow = productFound.slice(startIndex, endIndex);
  //*Calcular el total de páginas
  const totalPages = Math.ceil(productFound.length / itemsPerPage);

  // Filtros y ordenación
  const [openFilter, setOpenFilter] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);

  const handleOrderFilter = (opc) => {
    setSelected({ ...selected, ...opc });
    orderfilter(products, setProductsLocal, { ...selected, ...opc });
    //Restablecer la página actual a 1 al aplicar un filtro
    setCurrentPage(1);
    setOpenFilter(false);
  };

  const handleFilterChange = (newFilters) => {
    // Actualizar los filtros seleccionados
    setSelected({ ...selected, ...newFilters });
    // Restablecer la página actual a 1 al aplicar un filtro
    setCurrentPage(1);
  };

  useEffect(() => {
    setProductsLocal([...products]);
  }, [products]);

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

      <p className='text-2xl font-[500] text-custom-icon'>Productos</p>

      <div className='flex justify-between gap-2 mt-5 mb-2'>
        <div className='flex justify-between items-center gap-2'>
          <SearchBar
            placeholder='Buscar...'
            className='w-full sm:w-[424px]'
            searching={searching}
            setSearching={setSearching}
            searchTye='products'
            products={products}
          >
            {search.length > 0 ? (
              <button
                className='hidden sm:flex p-2 items-center hover:bg-[#B8B9CF] rounded-full transition w-8'
                onClick={clearSearch}
              >
                <X strokeWidth={3} />
              </button>
            ) : null}
          </SearchBar>
          <div
            onClick={() => setOpenFilter(true)}
            className='hidden cursor-pointer sm:flex gap-2 p-2 items-center hover:bg-[#B8B9CF] transition rounded-full bg-[#E5E5E5] px-2.5 border border-[#C8C8C8] text-custom-dark-gray'
          >
            <span>Filtros</span>
            <FilterIcon />
          </div>
        </div>
        <Link
          to='/addproduct'
          className={cn(buttonVariants(), 'text-xs text-center min-w-[100px]')}
        >
          Agregar Ítem
        </Link>
      </div>

      <div className='sm:hidden flex mb-1 items-center'>
        <div
          onClick={() => setOpenOrder(true)}
          className='bg-custom-white w-full text-center p-4 cursor-pointer'
        >
          Ordenar
        </div>
        <div
          onClick={() => setOpenFilter(true)}
          className='ml-1 bg-custom-white w-full text-center p-4 cursor-pointer'
        >
          Filtrar
        </div>
      </div>

      <div className='flex mb-2'>
        <div className='flex flex-auto items-center gap-1 text-custom-dark-gray'>
          {selected.category ? (
            <div className='bg-custom-button-hover rounded-full px-2 h-7 text-xs flex items-center'>
              <span>{selected.category} </span>{' '}
              <div
                className='cursor-pointer'
                onClick={() => {
                  setSelected({ ...selected, category: '' });
                  orderfilter(products, setProductsLocal, {
                    ...selected,
                    category: '',
                  });
                }}
              >
                <X size={18} />
              </div>
            </div>
          ) : (
            ''
          )}
          {selected.supplier ? (
            <div className='bg-custom-button-hover rounded-full px-2 h-7 text-xs flex items-center'>
              <span>{selected.supplier} </span>{' '}
              <div
                className='cursor-pointer'
                onClick={() => {
                  setSelected({ ...selected, supplier: '' });
                  orderfilter(products, setProductsLocal, {
                    ...selected,
                    supplier: '',
                  });
                }}
              >
                <X size={18} />
              </div>
            </div>
          ) : (
            ''
          )}
          {selected.order ? (
            <div className='bg-custom-button-hover rounded-full px-2 h-7 text-xs flex items-center'>
              <span>{selected.order} </span>{' '}
              <div
                className='cursor-pointer'
                onClick={() => {
                  setSelected({ ...selected, order: '' });
                  orderfilter(products, setProductsLocal, {
                    ...selected,
                    order: '',
                  });
                }}
              >
                <X size={18} />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className='hidden my-2 sm:flex'>
          <Menu as='div' className='relative'>
            <span className='mr-2 text-custom-black font-bold'>
              Ordenar stock por
            </span>
            <Menu.Button>
              <div className='flex font-light text-custom-black  hover:text-custom-blue'>
                Elige una opción
              </div>
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
              <Menu.Items className='text-custom-black absolute right-0 top-5 mt-2 w-32 origin-top-right divide-y bg-custom-panel shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          handleOrderFilter({ order: 'Menor cantidad' });
                        }}
                        className={`${
                          active
                            ? 'bg-custom-button-hover text-custom-blue'
                            : ''
                        } ${
                          selected.order === 'Menor cantidad'
                            ? 'text-custom-blue'
                            : 'text-custom-black'
                        } group flex w-full justify-center items-center px-2 py-2 text-sm`}
                      >
                        Menor cantidad
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          handleOrderFilter({ order: 'Mayor cantidad' });
                        }}
                        className={`${
                          active
                            ? 'bg-custom-button-hover text-custom-blue'
                            : ''
                        } ${
                          selected.order === 'Mayor cantidad'
                            ? 'text-custom-blue'
                            : 'text-custom-black'
                        } group flex w-full justify-center items-center px-2 py-2 text-sm`}
                      >
                        Mayor cantidad
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      <div className='border sm:border-4 rounded-xl border-custom-button-hover'>
        <table className='w-full text-[#1A1A1A]'>
          <thead>
            <tr className='text-left'>
              <th className='bg-custom-button-hover min-w-[168px] rounded-tl-lg sm:rounded-tl-md px-5 py-3'>
                Ítem
              </th>
              {/* <th className='bg-custom-button-hover hidden md:table-cell px-5 py-3'>
                Código
              </th> */}
              <th className='bg-custom-button-hover hidden md:table-cell px-5 py-3'>
                Categoría
              </th>
              <th className='bg-custom-button-hover hidden md:table-cell px-5 py-3'>
                Proveedor
              </th>
              <th className='bg-custom-button-hover px-5 py-3'>Stock</th>
              <th className='bg-custom-button-hover rounded-tr-lg sm:rounded-tr-md px-5 py-3 text-center'>
                Acción
              </th>
            </tr>
          </thead>

          <tbody>
            {productsToShow.map((product) => (
              <tr
                key={product.id}
                className='border-b sm:border-b-4 border-custom-button-hover last:border-b-0'
              >
                <td className='px-5 py-1 flex items-center min-w-[168px]'>
                  <img
                    width={50}
                    className='inline-block mr-2'
                    src={
                      product.family.image
                        ? product.family.image
                        : '/images/media.png'
                    }
                  />
                  {product.name}
                </td>
                {/* <td className='hidden md:table-cell px-5 py-1'>
                  {product.code}
                </td> */}
                <td className='hidden md:table-cell px-5 py-1'>
                  {product.family.name}
                </td>
                <td className='hidden md:table-cell px-5 py-1'>
                  {product.supplier.name}
                </td>
                <td className='px-5 py-1'>{product.stock}</td>
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
                                to={`/products/edit/${product.id}`}
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
                                  setDeleteId(product.id);
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
          onClickCallback={() => handleDeleteProduct(deleteId)}
        />
      </div>
      {removedmsg && <RemovedMessage />}

      {/* Paginación */}
      <footer className='flex items-center flex-wrap gap-3 justify-center sm:justify-end mt-7'>
        <span className='text-[#1A1A1A]'>{`Total ${totalProducts} Ítems`}</span>
        <nav>
          <ul className='flex items-center gap-3'>
            <li>
              <Button
                className='w-8 h-8 sm:p-1 rounded-md bg-[#B4B4B4]'
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className='text-[#626265]' />
              </Button>
            </li>
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 2 && page <= currentPage + 2)
              ) {
                return (
                  <li key={page}>
                    <Button
                      className={`w-8 h-8 sm:px-3 sm:py-1.5 rounded-md ${
                        page === currentPage
                          ? 'bg-[#918AC1]'
                          : 'bg-transparent border border-[#918AC1]'
                      } text-custom-black text-sm`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  </li>
                );
              } else if (page === currentPage - 3 || page === currentPage + 3) {
                // Agregar "..." para páginas adicionales
                return <li key={page}>...</li>;
              }
              return null;
            })}
            <li>
              <Button
                className='w-8 h-8 sm:p-1 rounded-md'
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight />
              </Button>
            </li>
          </ul>
        </nav>
      </footer>

      <Transition.Root show={openFilter || openOrder} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setOpenFilter}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-start justify-center sm:p-4 text-center sm:items-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative h-screen sm:h-auto sm:min-h-full w-full transform overflow-hidden sm:rounded-lg bg-custom-bg-light text-left shadow-xl transition-all sm:w-full sm:max-w-lg'>
                  {openFilter ? (
                    <Filter
                      setOpenFilter={setOpenFilter}
                      setProductsLocal={setProductsLocal}
                      selected={selected}
                      setSelected={handleFilterChange} // maneja el cambio de filtro
                    />
                  ) : null}
                  {openOrder ? (
                    <Order
                      setOpenOrder={setOpenOrder}
                      selected={selected}
                      setSelected={setSelected}
                      setProductsLocal={setProductsLocal}
                    />
                  ) : null}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ProductsPage;
