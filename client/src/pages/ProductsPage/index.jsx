import productsData from '../../data/productsData';
import { SearchBar } from '../../components/SearchBar';
import { EditIcon, FilterIcon } from '../../components/Icons';
import { Button } from '../../components/ui/Button';
import { ChevronLeft } from 'react-feather';
import { ChevronRight } from 'react-feather';

const ProductsPage = () => {
  return (
    <>
      <div className='flex flex-row justify-between text-custom-black'>
        <h2>Inventario</h2>
        <h2>Digital Express</h2>
      </div>

      <hr className='border-t-1 border-[#898AA3] mb-3' />

      <p className='text-2xl font-[500] text-custom-icon'>Productos</p>

      <div className='flex items-center justify-between gap-2 my-5'>
        <SearchBar placeholder='Buscar ítem' className='w-full sm:w-[356px]'>
          <button className='hidden sm:flex p-2'>
            <FilterIcon />
          </button>
        </SearchBar>

        <Button className='text-sm'>Agregar Ítem</Button>
      </div>

      <div className='border-4 rounded-xl border-custom-button-hover'>
        <table className='w-full text-[#1A1A1A]'>
          <thead>
            <tr className='text-left bg-custom-button-hover'>
              <th className='px-5 py-3'>Ítem</th>
              <th className='hidden md:table-cell px-5 py-3'>Código</th>
              <th className='hidden md:table-cell px-5 py-3'>Categoría</th>
              <th className='px-5 py-3'>Stock</th>
              <th className='px-5 py-3 text-center'>Acción</th>
            </tr>
          </thead>

          <tbody>
            {productsData.map((product) => (
              <tr
                key={product.id}
                className='border-b-4 border-custom-button-hover last:border-b-0'
              >
                <td className='px-5 py-1 flex'>
                  <img
                    width={50}
                    className='inline-block mr-2'
                    src='/images/media.png'
                  />
                  {product.name}
                </td>
                <td className='hidden md:table-cell px-5 py-1'>
                  {product.code}
                </td>
                <td className='hidden md:table-cell px-5 py-1'>
                  {product.family}
                </td>
                <td className='px-5 py-1'>{product.stock}</td>
                <td className='px-5 py-1 text-center'>
                  <button
                    aria-label='Editar producto'
                    className='text-custom-blue'
                  >
                    <EditIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <footer className='flex items-center gap-3 justify-end mt-7'>
        <span className='text-[#1A1A1A]'>Total 38 Ítems</span>
        <nav>
          <ul className='flex items-center gap-3'>
            <li>
              <Button className='w-8 h-8 p-1 rounded-md bg-[#B4B4B4]'>
                <ChevronLeft className='text-[#626265]' />
              </Button>
            </li>
            <li>
              <Button className='w-8 h-8 px-3 py-1.5 rounded-md border border-transparent bg-[#918AC1] text-sm'>
                1
              </Button>
            </li>
            {Array(5)
              .fill(0)
              .map((_, index) => {
                const page = index + 2;
                return (
                  <li key={page}>
                    <Button className='w-8 h-8 px-3 py-1.5 rounded-md bg-transparent border border-[#918AC1] text-custom-black text-sm'>
                      {page}
                    </Button>
                  </li>
                );
              })}
            <li>
              <Button className='w-8 h-8 p-1 rounded-md'>
                <ChevronRight className='' />
              </Button>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default ProductsPage;
