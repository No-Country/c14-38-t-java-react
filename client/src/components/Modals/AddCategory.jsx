const AddCategory = ({isCategoryModal, setIsCategoryModal}) => {
  return (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-gray-100 sm:bg-white p-4 sm:pt-9 sm:pb-8 sm:rounded-xl flex flex-col sm:justify-center sm:align-baseline gap-5 relative w-full sm:w-auto h-full sm:h-auto overflow-auto sm:overflow-visible">
              <button className="absolute sm:top-0 sm:right-0 sm:my-4 mt-0.5 ml-3 sm:mx-8" onClick={() => setIsCategoryModal(false)}>
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6 hidden sm:block">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:hidden">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
              </button>
              <h3 className="flex font-[Roboto] text-xl font-medium items-start mx-12 sm:mx-16">Categorías</h3>
              <div className="flex flex-col gap-5 mx-4 sm:ml-0 sm:mr-0">
                  <div className="flex items-center bg-gray-200 rounded-3xl shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:w-auto lg:w-96 lg:h-10 sm:ml-14 sm:mr-16">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                      <input type="text" className="block flex-1 border-0 bg-transparent py-2.5 pl-3 pr-6 text-custom-black placeholder:text-custom-black focus:ring-0 sm:text-sm sm:leading-6" placeholder="Buscar categoría" />
                  </div>
                  <button className="flex justify-center sm:justify-start items-center fixed bottom-10 right-4 sm:static sm:bg-gray-200 bg-custom-blue text-custom-white sm:text-custom-black sm:py-2.5 sm:pl-3 sm:pr-6 w-14 h-14 sm:w-auto lg:w-96 lg:h-10 sm:ml-14 sm:mr-16 border border-solid border-custom-gray sm:rounded rounded-full z-10">
                      <span className="hidden sm:flex ml-5 text-sm">+ Agrega una categoría nueva</span>
                      <span className="flex sm:hidden text-2xl">+</span>
                  </button>
                  <div className="w-full h-screen sm:h-36 sm:ml-14 sm:mr-16 overflow-auto sm:overflow-visible"></div>
                  <div className="flex justify-end gap-8 mx-3 sm:mx-8 sm:mt-auto">
                      <button className="hidden sm:flex items-center justify-center w-24 h-10 py-2.5 text-custom-blue border border-custom-blue rounded-3xl text-sm" onClick={() => setIsCategoryModal(false)}>Cancelar</button>
                      <button className="flex items-center justify-center w-8 h-8 sm:w-24 sm:h-10 absolute sm:static top-4 text-custom-blue sm:text-custom-white sm:bg-blue-gradient sm:text-sm sm:border sm:border-custom-blue rounded-3xl">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:hidden">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span className="hidden sm:block">Agregar</span>
                      </button>
                  </div>
              </div>
          </div>
      </div> 
  )
}

export default AddCategory
