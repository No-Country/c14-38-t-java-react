import { useEffect, useState } from 'react';
import { Check } from 'react-feather';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFamilies } from '../../../hooks/useFamilies';
import { serviceEditCategory } from '../../../services/categories/categories';

export const EditCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    families: categories,
    setFamilies: setCategories,
    isLoading,
  } = useFamilies();
  const category = categories.find((category) => category.id == id);

  const [form, setForm] = useState({
    id: '',
    name: '',
  });

  useEffect(() => {
    if (category) {
      setForm({
        id: category.id,
        name: category.name,
      });
    }
  }, [category]);

  const handleFormChange = (e) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data: updatedCategory } = await serviceEditCategory(form);

      const updatedCategories = categories.map((category) => {
        if (category.id === updatedCategory.id) {
          return updatedCategory;
        }
        return category;
      });

      setCategories(updatedCategories);
      navigate('/categories');
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading || !category) return null;

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
          </div>
          <div className='flex flex-col items-center lg:items-end gap-3 sm:pt-6 sm:w-1/2'>
            <img
              src={form.image ? form.image : '/images/media.png'}
              alt='media'
              className='hidden sm:block w-full lg:max-w-sm'
            />
            <img
              src={form.image ? form.image : '/images/media-responsive.png'}
              alt='media'
              className='sm:hidden w-full'
            />
            <input
              type='text'
              name='image'
              value={form.image}
              onChange={handleFormChange}
              className='sm:block w-full lg:max-w-sm block flex-1 border-custom-button-hover rounded bg-transparent py-1.5 pl-3 placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6 '
              placeholder='URL de la imagen'
            />
          </div>
        </div>
        <div className='flex justify-end gap-11 '>
          <Link to='/categories'>
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
