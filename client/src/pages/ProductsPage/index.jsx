import { useState } from "react";

const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <div>ProductsPage</div>
      <button className="flex items-center justify-center w-24 h-10 text-custom-white bg-blue-gradient border border-custom-blue rounded-3xl" onClick={()=> setIsOpen(true)}>Agregar Ítem</button>
      {/*Modal*/}
      {
        isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-4 sm:pt-9 sm:pb-8 sm:rounded-xl flex flex-col sm:justify-center sm:align-baseline gap-5 relative w-full sm:w-auto h-full sm:h-auto overflow-auto sm:overflow-visible">
              <button className="absolute sm:top-0 sm:right-0 sm:my-4 mt-0.5 ml-3 sm:mx-8" onClick={() => setIsOpen(false)}>
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 hidden sm:block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:hidden">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <h3 className="hidden sm:flex font-[Roboto] text-xl font-medium items-start mx-12 sm:mx-16">Agregar Ítem al inventario</h3>
              <h3 className="sm:hidden font-[Roboto] text-xl font-medium items-start mx-12 sm:mx-16">Agregar Ítem</h3>
              <div className="flex flex-col gap-3 sm:gap-9 mx-4 sm:mx-16 sm:flex-row">
                <div className="flex flex-col">
                  <label htmlFor='file-img' className="cursor-pointer">
                    <img src='/images/media.png' alt="media" className="hidden sm:block" />
                    <img src='/images/media-responsive.png' alt="media" className="sm:hidden w-full" />
                    <span className="flex items-center justify-center mt-2 text-xs font-normal text-custom-gray">Agrega una imagen</span>
                    <input id="file-img" className="hidden" type="file" />
                  </label>
                </div>
                <div className="flex flex-col">
                  <div className="mb-3 sm:mb-6 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                    <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Nombre"/>
                  </div>
                  <div className="mb-3 sm:mb-6 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                    <input type="number" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Código"/>
                  </div>
                  <div className="mb-3 sm:mb-6 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                    <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Descripción"/>
                  </div>
                  <div className="mb-3 sm:mb-6 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                    <input className="block flex-1 border-0 bg-transparent py-1.5 pl-3  text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Categoría"/>
                  </div>
                  <div className="mb-3 sm:mb-6 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                    <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Stock"/>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-7 mx-3 mt-44 sm:mx-8 sm:mt-auto">
                <button className="hidden sm:flex items-center justify-center w-24 h-10 text-custom-blue border border-custom-blue rounded-3xl" onClick={()=> setIsOpen(false)}>Cancelar</button>
                <button className="flex items-center justify-center w-14 h-14 sm:w-24 sm:h-10 text-custom-white bg-blue-gradient border border-custom-blue rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="hidden sm:block">Agregar</span>
                </button>
              </div>
            </div>
          </div> 
        )
      }
    </>
  );
};

export default ProductsPage;
