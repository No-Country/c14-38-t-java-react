import { useState } from "react";

const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div>ProductsPage</div>
      <button className="flex items-center justify-center w-24 h-10 text-custom-white bg-blue-gradient border border-custom-blue rounded-3xl" onClick={()=> setIsOpen(true)}>Agregar Ítem</button>
      {/*Modal*/}
      {
        isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white pt-9 pb-8 rounded-xl flex flex-col justify-center align-baseline gap-5 relative">
              <button className=" absolute top-0 right-0 my-4 mx-8" onClick={() => setIsOpen(false)}>
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
              </button>
              <h3 className="font-[Roboto] text-xl font-medium items-start mx-16">Agregar Ítem al inventario</h3>
              <div className="flex gap-9 mx-16">
                <div className="flex flex-col">
                  <label htmlFor='file-img' className="cursor-pointer">
                    <img src='/images/media.png' alt="media" />
                    <span className="flex items-center justify-center mt-2 text-xs font-normal text-custom-gray">Agrega una imagen</span>
                    <input id="file-img" className="hidden" type="file" />
                  </label>
                </div>
                <div className="flex flex-col">
                  <div className="mb-6 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue lg:max-w-sm sm:max-w-md w-screen">
                    <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Nombre"/>
                  </div>
                  <div className="mb-6 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue lg:max-w-sm sm:max-w-md w-screen">
                    <input type="number" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Código"/>
                  </div>
                  <div className="mb-6 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue lg:max-w-sm sm:max-w-md w-screen">
                    <select className="block flex-1 border-0 bg-transparent py-1.5 pl-3  text-custom-black focus:ring-0 sm:text-sm sm:leading-6" defaultValue="">
                      <option disabled value="" hidden>Categoría</option>
                    </select>
                  </div>
                  <div className="mb-6 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue lg:max-w-sm sm:max-w-md w-screen">
                    <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Proveedor"/>
                  </div>
                  <div className="mb-6 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue lg:max-w-sm sm:max-w-md w-screen">
                    <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Stock"/>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-7 mx-8">
                <button className="flex items-center justify-center w-24 h-10 text-custom-blue border border-custom-blue rounded-3xl" onClick={()=> setIsOpen(false)}>Cancelar</button>
                <button className="flex items-center justify-center w-24 h-10 text-custom-white bg-blue-gradient border border-custom-blue rounded-3xl">Agregar</button>
              </div>
            </div>
          </div> 
        )
      }
    </>
  );
};

export default ProductsPage;
