import { useState } from 'react';
import categoriesData from '../../data/categoriesData';
import suppliersData from '../../data/suppliersData';
import { useProducts } from '../../hooks/useProducts';
import { ChevronDown, ChevronUp, X } from 'react-feather';

function FilterCategory({
  setOpenFilter,
  selectedCategory,
  setSelectedCategory,
  selectedSupplier,
  setSelectedSupplier,
  cancelButtonRef,
  setProductsLocal,
}) {
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

  const handleCategory = (filter) => {
    setSelectedCategory(filter);
    setSelectedSupplier('');
    const filterCategory = products.filter((product) => {
      return filter === '' ? true : product.family.name == filter;
    });
    setProductsLocal(filterCategory);
    setOpenFilter(false);
  };
  const handleSupplier = (filter) => {
    setSelectedSupplier(filter);
    setSelectedCategory('');
    const filterCategory = products.filter((product) => {
      return filter === '' ? true : product.supplier.name == filter;
    });
    setProductsLocal(filterCategory);
    setOpenFilter(false);
  };

  const clearFilters = () => {
    setProductsLocal([...products]);
    setSelectedSupplier('');
    setSelectedCategory('');
    setOpenFilter(false);
  };

  return (
    <div className='flex items-start bg-custom-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
      <div className='w-full m-3'>
        <div className='flex justify-between'>
          <h3 className='flex text-xl font-medium items-start text-custom-black mb-5'>
            Filtrar por categorías
          </h3>
          <button
            className='absolute top-4 right-4'
            onClick={() => setOpenFilter(false)}
          >
            <X />
          </button>
        </div>
        <hr />
        <div>
          <div
            onClick={toggleCatExpansion}
            aria-expanded={isCategoryOpen}
            aria-controls='expandable-content-category'
            className=' py-2 rounded-md flex justify-between cursor-pointer'
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
                  selectedCategory === categ.name ? 'text-custom-blue' : ''
                }`}
                onClick={() => {
                  handleCategory(categ.name);
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
            className=' py-2 rounded-md flex justify-between cursor-pointer'
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
                  selectedSupplier === supplier.name ? 'text-custom-blue' : ''
                }`}
                onClick={() => {
                  handleSupplier(supplier.name);
                }}
              >
                {supplier.name}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className='gap-7 pt-3 sm:flex sm:flex-row justify-end '>
          <button
            onClick={() => setOpenFilter(false)}
            ref={cancelButtonRef}
            className='mt-3 bg-none rounded-full py-2.5 px-4 font-normal border border-custom-blue text-custom-blue'
          >
            Cancelar
          </button>
          <button
            onClick={clearFilters}
            className='mt-3 bg-none rounded-full py-2.5 px-4 font-normal border border-custom-blue text-custom-blue'
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterCategory;
