export const AddItem = () => {
    return (
          <div className=" bg-gray-100 sm:bg-white p-8 sm:pt-9 sm:pb-12 sm:rounded-xl flex flex-col sm:justify-center sm:align-baseline gap-5 absolute top-0 left-0 bottom-0 right-0 sm:relative w-full sm:w-auto h-full sm:h-auto overflow-auto sm:overflow-visible">
              <button className="absolute sm:top-0 sm:right-0 sm:my-4 mt-0.5 ml-3 sm:mx-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:hidden">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
              </button>
              <h3 className="hidden sm:flex font-[Roboto] text-xl font-medium items-start mx-12 sm:mx-0 sm:mb-8">Agregar Ítem al inventario</h3>
              <h3 className="sm:hidden font-[Roboto] text-xl font-medium items-start mx-12 sm:mx-16">Agregar Ítem</h3>
              <div className="flex flex-col-reverse gap-3 sm:gap-32 mx-4 sm:mx-auto sm:flex-row">
                  <div className="flex flex-col">
                      <div className='hidden sm:block sm:mb-3 font-sans font-medium text-base'>Nombre</div>
                      <div className="mb-3 sm:mb-3 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                          <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Nombre del producto" />
                      </div>
                      <div className='hidden sm:block sm:mb-3 font-sans font-medium text-base'>Código</div>
                      <div className="mb-3 sm:mb-3 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                          <input type="number" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Código" />
                      </div>
                      <div className='hidden sm:block sm:mb-3 font-sans font-medium text-base'>Descripción</div>
                      <div className="mb-3 sm:mb-3 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                          <textarea type="text" className="block flex-1 border-0 h-20 resize-none bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Descripción del producto" />
                      </div>
                      <div className='hidden sm:block sm:mb-3 font-sans font-medium text-base'>Categoría</div>
                      <div className="mb-3 sm:mb-3 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                          <input className="block flex-1 border-0 bg-transparent py-1.5 pl-3  text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Categoría" />
                      </div>
                      <div className='hidden sm:block sm:mb-3 font-sans font-medium text-base'>Proveedor</div>
                      <div className="mb-3 sm:mb-3 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                          <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Proveedor del producto" />
                      </div>
                      <div className='hidden sm:block sm:mb-3 font-sans font-medium text-base'>Cantidad</div>
                      <div className="mb-3 sm:mb-3 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                          <input type="number" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Stock" />
                      </div>
                  </div>
                  <div className="flex flex-col sm:pt-9 sm:w-80">
                      <label htmlFor='file-img' className="cursor-pointer">
                          <img src='/images/media.png' alt="media" className="hidden sm:block rounded-xl" />
                          <img src='/images/media-responsive.png' alt="media" className="sm:hidden w-full" />
                          <span className="flex items-center justify-center mt-2 sm:mt-4 sm:text-base text-xs sm:font-medium font-normal sm:text-custom-black text-custom-gray">Agrega una imagen</span>
                          <input id="file-img" className="hidden" type="file" />
                      </label>
                  </div>
              </div>
              <div className="flex justify-end gap-11 mx-3 mt-44 sm:mx-0 sm:mt-1">
                  <button className="hidden sm:flex items-center justify-center w-36 h-11 text-custom-blue text-xs border border-custom-blue rounded-3xl">Cancelar</button>
                  <button className="flex items-center justify-center w-14 h-14 sm:w-36 sm:h-11 text-custom-white bg-blue-gradient text-xs border border-custom-blue rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:hidden">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="hidden sm:block">Agregar</span>
                  </button>
              </div>
          </div>

  )
}