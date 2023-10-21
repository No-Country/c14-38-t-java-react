import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
// import branchesData from '../../data/branchesData';
import productsData from '../../data/productsData';
import Sidebar from '../../components/Sidebar';

const ProductsPage = () => {
  return (
    <>
      <Sidebar />
      <main className='flex-grow w-3/4 bg-custom-panel p-4 m-2.5 rounded-lg'>
        <div className='flex flex-row justify-between text-custom-black'>
          <h2>Inventario</h2>
          <h2>Digital Express</h2>
        </div>
        <hr className='border-t-1 border-[#898AA3] mb-3' />

        <div className='text-custom-white mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8'>
          {productsData.map((branch) => (
            <div key={branch.id} className='group flex bg-blue-card rounded'>
              <div
                key={branch.id}
                className='p-3 aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none h-24 sm:h-28 lg:h-32 '
              >
                <h1>{branch.name}</h1>
                <p>1200</p>
                <h2>Productos</h2>
              </div>
              <div className='p-4 items-end flex'>
                <Link
                  to='/branches/norte'
                  className='flex items-center justify-center bg-blue-gradient text-white rounded w-9 h-9'
                >
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProductsPage;
