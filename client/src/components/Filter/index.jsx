import { useState } from 'react';
import categoriesData from '../../data/categoriesData';
import suppliersData from '../../data/suppliersData';
import { useProducts } from '../../hooks/useProducts';
import { ArrowLeft, ChevronDown, ChevronUp, X } from 'react-feather';
import orderfilter from '../../utils/orderfilter';

function Filter({ setOpenFilter, selected, setSelected, setProductsLocal }) {
  const { products } = useProducts();

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSupplierOpen, setIsSupplierOpen] = useState(false);

  const toggleCatExpansion = () => {
    setIsSupplierOpen(false);
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleSupExpansion = () => {
    setIsCategoryOpen(false);
    setIsSupplierOpen(!isSupplierOpen);
  };

  const handleOrderFilter = (opc) => {
    setSelected({ ...selected, ...opc });
    orderfilter(products, setProductsLocal, { ...selected, ...opc });
    setOpenFilter(false);
  };

  const clear = () => {
    setSelected({ category: '', supplier: '', order: '' });
    setProductsLocal([...products]);
    setOpenFilter(false);
  };

  return (
    <div className='flex items-start bg-custom-bg-light px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
      <div className='w-full m-7'>
        <div className='flex mb-5 sm:justify-between justify-normal items-center'>
          <button
            className='hidden sm:block absolute top-4 right-4'
            onClick={() => setOpenFilter(false)}
          >
            <X />
          </button>
          <h3 className='text-xl font-medium text-custom-black'>Filtrar por</h3>
          <div
            className='sm:hidden absolute left-2'
            onClick={() => setOpenFilter(false)}
          >
            <ArrowLeft />
          </div>
        </div>
        <hr />
        <div>
          <div
            onClick={toggleCatExpansion}
            aria-expanded={isCategoryOpen}
            aria-controls='expandable-content-category'
            className=' py-4 rounded-md flex justify-between cursor-pointer'
          >
            <span>Categoría</span>
            {isCategoryOpen ? <ChevronUp /> : <ChevronDown />}
          </div>
          <ul
            id='expandable-content-category'
            style={{ display: isCategoryOpen ? 'block' : 'none' }}
            aria-hidden={!isCategoryOpen}
            className='p-2'
          >
            {categoriesData.map((categ) => (
              <li
                key={categ.id}
                className={`p-2 cursor-pointer ${
                  selected.category === categ.name ? 'text-custom-blue' : ''
                }`}
                onClick={() => {
                  handleOrderFilter({ category: categ.name });
                }}
              >
                {categ.name}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div>
          <div
            onClick={toggleSupExpansion}
            aria-expanded={isSupplierOpen}
            aria-controls='expandable-content-supplier'
            className=' py-4 rounded-md flex justify-between cursor-pointer'
          >
            <span>Proveedor</span>
            {isSupplierOpen ? <ChevronUp /> : <ChevronDown />}
          </div>
          <ul
            id='expandable-content-supplier'
            style={{ display: isSupplierOpen ? 'block' : 'none' }}
            aria-hidden={!isSupplierOpen}
            className='p-2'
          >
            {suppliersData.map((supplier) => (
              <li
                key={supplier.id}
                className={`p-2 cursor-pointer ${
                  selected.supplier === supplier.name ? 'text-custom-blue' : ''
                }`}
                onClick={() => {
                  handleOrderFilter({ supplier: supplier.name });
                }}
              >
                {supplier.name}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className='gap-7 pt-5 flex sm:flex-row justify-end'>
          <button
            onClick={() => setOpenFilter(false)}
            className='hidden sm:block mt-3 bg-none rounded-full py-2.5 px-4 font-normal border border-custom-blue text-custom-blue'
          >
            Cancelar
          </button>
          <button
            onClick={clear}
            className='mt-3 bg-none rounded-full py-2.5 px-4 font-normal border border-custom-blue text-custom-blue'
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
