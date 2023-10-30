// import productsData from '../../data/productsData';
import { SearchBar } from '../../components/SearchBar';
import { EditIcon, FilterIcon, MoreOptionsIcon } from '../../components/Icons';
import { Button } from '../../components/ui/Button';
import { ChevronLeft, X } from 'react-feather';
import { ChevronRight } from 'react-feather';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';

//import Loading from '../../components/Loading';

const ProductsPage = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => setSearch(e.target.value);
  const clearSearch = () => setSearch('');

  //Logica de la paginacion
  //contexto (useProducts), obtiene la cantidad total de productos
  const totalProducts = products.length;

  // Define la cantidad de productos que se desea mostrar por página
  const itemsPerPage = 10;

  // Calcula la cantidad total de páginas
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  //estado que almacena la página actual
  const [currentPage, setCurrentPage] = useState(1);


  return (
    <>
      <div className='hidden sm:flex flex-row justify-between text-custom-black'>
        <h2>Inventario</h2>
        <h2>Digital Express</h2>
      </div>

      <hr className='hidden sm:flex border-t-1 border-[#898AA3] mb-3' />

      <p className='text-2xl font-[500] text-custom-icon'>Productos</p>

      <div className='flex justify-between gap-2 my-5'>
        <SearchBar
          placeholder='Buscar ítem'
          className='w-full sm:w-[424px]'
          value={search}
          onChange={handleSearchChange}
        >
          {search.length > 0 ? (
            <button
              className='hidden sm:flex p-2 items-center hover:bg-[#B8B9CF] rounded-full transition w-8 h-8'
              onClick={clearSearch}
            >
              <X strokeWidth={3} />
            </button>
          ) : (
            <button className='hidden sm:flex p-2 items-center hover:bg-[#B8B9CF] rounded-full transition w-8 h-8'>
              <FilterIcon />
            </button>
          )}
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
                Ítem
              </th>
              {/* <th className='bg-custom-button-hover hidden md:table-cell px-5 py-3'>
                Código
              </th> */}
              {/* <th className='bg-custom-button-hover hidden md:table-cell px-5 py-3'>
                Categoría
              </th> */}
              <th className='bg-custom-button-hover px-5 py-3'>Stock</th>
              <th className='bg-custom-button-hover rounded-tr-lg sm:rounded-tr-md px-5 py-3 text-center'>
                Acción
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className='border-b sm:border-b-4 border-custom-button-hover last:border-b-0'
              >
                <td className='px-5 py-1 flex items-center min-w-[168px]'>
                  <img
                    width={50}
                    className='inline-block mr-2'
                    src='/images/media.png'
                  />
                  {product.name}
                </td>
                {/* <td className='hidden md:table-cell px-5 py-1'>
                  {product.code}
                </td> */}
                {/* <td className='hidden md:table-cell px-5 py-1'>
                  {product.family}
                </td> */}
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
                              <button
                                className={`text-left px-4 py-2 ${active ? 'hover:text-custom-blue' : ''
                                  }`}
                              >
                                Editar
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {(active) => (
                              <button
                                className={`text-left px-4 py-2 ${active ? 'hover:text-custom-blue' : ''
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
      </div>

      {/* Pagination */}
      <footer className='flex items-center flex-wrap gap-3 justify-center sm:justify-end mt-7'>
        <span className='text-[#1A1A1A]'>{`Total ${totalProducts} Ítems`}</span>
        <nav>
          <ul className='flex items-center gap-3'>
            <li>
              <Button
                className='w-8 h-8 sm:p-1 rounded-md bg-[#B4B4B4]'
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className='text-[#626265]' />
              </Button>
            </li>
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              // Mostrar solo un rango limitado de páginas (por ejemplo, 5)
              if (page === 1 || page === totalPages || (page >= currentPage - 2 && page <= currentPage + 2)) {
                return (
                  <li key={page}>
                    <Button
                      className={`w-8 h-8 sm:px-3 sm:py-1.5 rounded-md ${page === currentPage ? 'bg-[#918AC1]' : 'bg-transparent border border-[#918AC1]'
                        } text-custom-black text-sm`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  </li>
                );
              } else if (page === currentPage - 3 || page === currentPage + 3) {
                // Agregar puntos suspensivos
                return <li key={page}>...</li>;
              }
              return null;
            })}
            <li>
              <Button
                className='w-8 h-8 sm:p-1 rounded-md'
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight />
              </Button>
            </li>
          </ul>
        </nav>
      </footer>

    </>
  );
};

export default ProductsPage;
