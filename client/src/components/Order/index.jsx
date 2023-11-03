import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ArrowLeft, ChevronDown, ChevronUp, X } from 'react-feather';
import orderfilter from '../../utils/orderfilter';

function Order({ setOpenOrder, selected, setSelected, setProductsLocal }) {
  const { products } = useProducts();

  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const toggleOrderExpansion = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  const handleOrder = (opc) => {
    setSelected({ ...selected, ...opc });
    orderfilter(products, setProductsLocal, { ...selected, ...opc });
    setOpenOrder(false);
  };

  const clear = () => {
    setSelected({ category: '', supplier: '', order: '' });
    setProductsLocal([...products]);
    setOpenOrder(false);
  };

  return (
    <div className='flex items-start bg-custom-bg-light px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
      <div className='w-full m-7'>
        <div className='flex mb-5 sm:justify-between justify-normal items-center'>
          <button
            className='hidden sm:block absolute top-4 right-4'
            onClick={() => setOpenOrder(false)}
          >
            <X />
          </button>
          <h3 className='text-xl font-medium text-custom-black'>Ordenar por</h3>
          <div
            className='sm:hidden absolute left-2'
            onClick={() => setOpenOrder(false)}
          >
            <ArrowLeft />
          </div>
        </div>
        <hr />
        <div>
          <div
            onClick={toggleOrderExpansion}
            aria-expanded={isOrderOpen}
            aria-controls='expandable-content-category'
            className=' py-4 rounded-md flex justify-between cursor-pointer'
          >
            <span>Stock</span>
            {isOrderOpen ? <ChevronUp /> : <ChevronDown />}
          </div>
          <ul
            id='expandable-content-category'
            style={{ display: isOrderOpen ? 'block' : 'none' }}
            aria-hidden={!isOrderOpen}
            className='p-2'
          >
            <li
              className={`p-2 cursor-pointer ${
                selected.order === 'Menor cantidad' ? 'text-custom-blue' : ''
              }`}
              onClick={() => {
                handleOrder({ order: 'Menor cantidad' });
              }}
            >
              Menor cantidad
            </li>
            <li
              className={`p-2 cursor-pointer ${
                selected.order === 'Mayor cantidad' ? 'text-custom-blue' : ''
              }`}
              onClick={() => {
                handleOrder({ order: 'Mayor cantidad' });
              }}
            >
              Mayor cantidad
            </li>
          </ul>
        </div>
        <hr />
        <div className='gap-7 pt-5 flex sm:flex-row justify-end'>
          <button
            onClick={() => setOpenOrder(false)}
            className='hidden sm:block mt-3 bg-none rounded-full py-2.5 px-4 font-normal border border-custom-blue text-custom-blue'
          >
            Cancelar
          </button>
          <button
            onClick={clear}
            className='mt-3 bg-none rounded-full py-2.5 px-4 font-normal border border-custom-blue text-custom-blue'
          >
            Limpiar Ordenación
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
