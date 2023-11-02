import { SearchBar } from '../../components/SearchBar';
import { EditIcon, FilterIcon, MoreOptionsIcon } from '../../components/Icons';
import { buttonVariants } from '../../components/ui/Button';
import { X } from 'react-feather';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useFamilies } from '../../hooks/useFamilies';
import { Link } from 'react-router-dom';
import { serviceDeleteCategory } from '../../services/categories/categories';
import { cn } from '../../utils/cn';
//import Loading from '../../components/Loading';

const CategoriesPage = () => {
  const { families: categories, setFamilies: setCategories } = useFamilies();
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => setSearch(e.target.value);
  const clearSearch = () => setSearch('');

  const handleDeleteCategory = async (id) => {
    try {
      await serviceDeleteCategory(id);
      setCategories(categories.filter((category) => category.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='hidden sm:flex flex-row justify-between text-custom-black'>
        <h2>Inventario</h2>
        <h2>Digital Express</h2>
      </div>

      <hr className='hidden sm:flex border-t-1 border-[#898AA3] mb-3' />

      <p className='text-2xl font-[500] text-custom-icon'>Categorias</p>

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
        <Link
          to='/addcategory'
          className={cn(buttonVariants(), 'text-xs min-w-[100px]')}
        >
          Agregar Categoría
        </Link>
      </div>

      <div className='border sm:border-4 rounded-xl border-custom-button-hover'>
        <table className='w-full text-[#1A1A1A]'>
          <thead>
            <tr className='text-left'>
              <th className='bg-custom-button-hover min-w-[168px] rounded-tl-lg sm:rounded-tl-md px-5 py-3'>
                Categoría
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
            {categories.map((category) => (
              <tr
                key={category.id}
                className='border-b sm:border-b-4 border-custom-button-hover last:border-b-0'
              >
                <td className='px-5 py-3 flex items-center min-w-[168px]'>
                  {category.name}
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
                              <Link
                                to={`/categories/edit/${category.id}`}
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
                                onClick={async () =>
                                  handleDeleteCategory(category.id)
                                }
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
      </div>
    </>
  );
};

export default CategoriesPage;
