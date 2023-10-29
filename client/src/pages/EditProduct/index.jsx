import { useEffect, useState } from 'react';
import AddCategory from '../../components/Modals/AddCategory';
import AddSupplier from '../../components/Modals/AddSupplier';
import { Check } from 'react-feather';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import axios from 'axios';

export const EditProduct = () => {
  const { id } = useParams();

  const { products, isLoading } = useProducts();
  const product = products.find((product) => product.id == id);

  const [isCategoryModal, setIsCategoryModal] = useState(false);
  const [isSupplierModal, setIsSupplierModal] = useState(false);

  const [form, setForm] = useState({
    name: '',
    description: '',
    family: '',
    supplier: '',
    stock: '',
  });

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name,
        description: product.description,
        family: product.family.name,
        supplier: product.supplier.name,
        stock: product.stock ?? '',
      });
    }
  }, [product]);

  const handleFormChange = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  const handleFamilyChange = (value) => {
    setForm((prevForm) => ({ ...prevForm, family: value }));
  };

  const handleSupplierChange = (value) => {
    setForm((prevForm) => ({ ...prevForm, supplier: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/product/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading || !product) return null;

  return (
    <>
      <div className='text-custom-black p-7 bg-gray-100 sm:bg-white sm:rounded-xl flex flex-col sm:justify-center sm:align-baseline gap-4 absolute top-0 left-0 bottom-0 right-0 sm:static w-full h-auto sm:w-auto sm:h-auto overflow-auto sm:overflow-visible'>
        <h3 className='hidden sm:flex  text-xl  items-start sm:mb-0 '>
          Editar Ítem
        </h3>
        <h3 className='sm:hidden  text-xl  items-start mt-8 '>Editar Ítem</h3>
        <div className='flex flex-col-reverse gap-3 lg:gap-28 sm:flex-row'>
          <div className='flex flex-col sm:w-1/2 '>
            <p className=' font-sans text-base '>Nombre</p>
            <div className=' flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue'>
              <input
                type='text'
                value={form.name}
                onChange={handleFormChange}
                name='name'
                className='block flex-1 border-0 bg-transparent py-1.5 pl-3  placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6 w-full'
                placeholder='Nombre del producto'
                required
              />
            </div>
            {/* <div className=' font-sans  text-base '>Código</div>
            <div className=' flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue'>
              <input
                type='number'
                className='block flex-1 border-0 bg-transparent py-1.5 pl-3  placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6 w-full'
                placeholder='Código'
              />
            </div> */}
            <div className=' font-sans  text-base '>Descripción</div>
            <div className='mb-3 sm:mb-3 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue'>
              <textarea
                type='text'
                value={form.description}
                onChange={handleFormChange}
                name='description'
                className='block flex-1 border-0 h-20 resize-none bg-transparent py-1.5 pl-3  placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6 w-full'
                placeholder='Descripción del producto'
              />
            </div>
            <div className=' font-sans  text-base '>Categoría</div>
            <div
              className=' flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue'
              onClick={() => setIsCategoryModal(true)}
            >
              <input
                className='block flex-1 border-0 bg-transparent py-1.5 pl-3   placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6 w-full'
                placeholder='Categoría'
                value={form.family}
                onChange={(e) => handleFamilyChange(e.target.value)}
                readOnly
              />
            </div>
            {isCategoryModal && (
              <AddCategory
                isCategoryModal={isCategoryModal}
                setIsCategoryModal={setIsCategoryModal}
                setCategory={handleFamilyChange}
              />
            )}
            <div className=' font-sans  text-base '>Proveedor</div>
            <div
              className=' flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue'
              onClick={() => setIsSupplierModal(true)}
            >
              <input
                type='text'
                className='block flex-1 border-0 bg-transparent py-1.5 pl-3  placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6 w-full'
                placeholder='Proveedor del producto'
                value={form.supplier}
                onChange={(e) => handleSupplierChange(e.target.value)}
                readOnly
              />
            </div>
            {isSupplierModal && (
              <AddSupplier
                isSupplierModal={isSupplierModal}
                setIsSupplierModal={setIsSupplierModal}
                setSupplier={handleSupplierChange}
              />
            )}
            <div className='font-sans  text-base '>Cantidad</div>
            <div className=' flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue'>
              <input
                type='number'
                value={form.stock}
                name='stock'
                onChange={handleFormChange}
                className='block flex-1 border-0 bg-transparent py-1.5 pl-3  placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6 w-full'
                placeholder='Stock'
              />
            </div>
          </div>
          <div className='flex flex-col sm:justify-center lg:justify-normal sm:pt-6 sm:w-1/2'>
            <label htmlFor='file-img' className='w-full flex  justify-end'>
              <img
                src='/images/media.png'
                alt='media'
                className='hidden sm:block rounded-xl w-full lg:max-w-sm'
              />
              <img
                src='/images/media-responsive.png'
                alt='media'
                className='sm:hidden w-full'
              />
              {/* <span className='flex items-center justify-center mt-2 sm:mt-4 sm:text-base text-xs font-normal sm: text-custom-gray'>
                Agrega una imagen
              </span> */}
              {/* <input id='file-img' className='hidden' type='file' /> */}
            </label>
          </div>
        </div>
        <div className='flex justify-end gap-11 '>
          <Link to='/products'>
            <button className='hidden sm:flex items-center justify-center w-36 h-11 text-custom-blue text-xs border border-custom-blue rounded-3xl'>
              Cancelar
            </button>
          </Link>
          <button
            onClick={handleUpdate}
            className='flex items-center justify-center w-8 h-8 sm:w-36 sm:h-11 absolute sm:static top-8 text-custom-blue sm:text-custom-white sm:bg-blue-gradient sm:text-xs sm:border sm:border-custom-blue rounded-3xl'
          >
            <Check className='w-8 h-8 sm:hidden' />
            <span className='hidden sm:block'>Guardar</span>
          </button>
        </div>
      </div>
    </>
  );
};
