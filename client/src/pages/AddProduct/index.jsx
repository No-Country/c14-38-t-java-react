import { useState } from "react"
import AddCategory from "../../components/Modals/AddCategory"
import AddSupplier from "../../components/Modals/AddSupplier"
import { Check } from "react-feather"

export const AddProduct = () => {

    const [isCategoryModal, setIsCategoryModal] = useState(false);
    const [isSupplierModal, setIsSupplierModal] = useState(false);

    const [category, setCategory] = useState("");
    const [supplier, setSupplier] = useState("");

    return (
        <>
          <div className=" bg-gray-100 sm:bg-white sm:rounded-xl flex flex-col sm:justify-center sm:align-baseline gap-4 absolute top-0 left-0 bottom-0 right-0 sm:static w-full h-auto sm:w-auto sm:h-auto overflow-auto sm:overflow-visible">
              <button className="absolute top-8 sm:static ml-3 sm:mx-8 text-custom-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:hidden">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
              </button>
              <h3 className="hidden sm:flex font-[Roboto] text-xl font-medium items-start mx-12 sm:mx-8 sm:mb-0 text-custom-black">Agregar Ítem al inventario</h3>
              <h3 className="sm:hidden font-[Roboto] text-xl font-medium items-start mx-12 mt-8 text-custom-black">Agregar Ítem</h3>
              <div className="flex flex-col-reverse gap-3 sm:gap-28 mx-4 sm:mx-auto sm:flex-row">
                  <div className="flex flex-col sm:w-1/2 gap-2 sm:gap-0.5">
                      <div className=' font-sans font-medium text-base text-custom-black'>Nombre</div>
                      <div className=" flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                          <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Nombre del producto" />
                      </div>
                      <div className=' font-sans font-medium text-base text-custom-black'>Código</div>
                      <div className=" flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                          <input type="number" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Código" />
                      </div>
                      <div className=' font-sans font-medium text-base text-custom-black'>Descripción</div>
                      <div className="mb-3 sm:mb-3 flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                          <textarea type="text" className="block flex-1 border-0 h-20 resize-none bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Descripción del producto" />
                      </div>
                      <div className=' font-sans font-medium text-base text-custom-black'>Categoría</div>
                      <div className=" flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen" onClick={() => setIsCategoryModal(true)}>
                          <input className="block flex-1 border-0 bg-transparent py-1.5 pl-3  text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Categoría" value={category} onChange={(e) => setCategory(e.target.value)} readOnly/>
                      </div>
                      {isCategoryModal && (<AddCategory isCategoryModal={isCategoryModal} setIsCategoryModal={setIsCategoryModal} setCategory={setCategory} />)}
                      <div className=' font-sans font-medium text-base text-custom-black'>Proveedor</div>
                      <div className=" flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen" onClick={() => setIsSupplierModal(true)}>
                          <input type="text" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Proveedor del producto" value={supplier} onChange={(e) => setSupplier(e.target.value)} readOnly/>
                      </div>
                      {isSupplierModal && (<AddSupplier isSupplierModal={isSupplierModal} setIsSupplierModal={setIsSupplierModal} setSupplier={setSupplier} />)}
                      <div className='font-sans font-medium text-base text-custom-black'>Cantidad</div>
                      <div className=" flex rounded-lg shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:max-w-md sm:w-auto lg:w-screen">
                          <input type="number" className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-custom-black placeholder:text-custom-gray focus:ring-0 sm:text-sm sm:leading-6" placeholder="Stock" />
                      </div>
                  </div>
                  <div className="flex flex-col sm:justify-center lg:justify-normal sm:pt-6 sm:w-1/2">
                      <label htmlFor='file-img' className="cursor-pointer">
                          <img src='/images/media.png' alt="media" className="hidden sm:block rounded-xl" />
                          <img src='/images/media-responsive.png' alt="media" className="sm:hidden w-full" />
                          <span className="flex items-center justify-center mt-2 sm:mt-4 sm:text-base text-xs sm:font-medium font-normal sm:text-custom-black text-custom-gray">Agrega una imagen</span>
                          <input id="file-img" className="hidden" type="file" />
                      </label>
                  </div>
              </div>
              <div className="flex justify-end gap-11 mx-3 mt-28 sm:mx-8 sm:my-4 sm:mt-0">
                  <button className="hidden sm:flex items-center justify-center w-36 h-11 text-custom-blue text-xs border border-custom-blue rounded-3xl">Cancelar</button>
                  <button className="flex items-center justify-center w-8 h-8 sm:w-36 sm:h-11 absolute sm:static top-8 text-custom-blue sm:text-custom-white sm:bg-blue-gradient sm:text-xs sm:border sm:border-custom-blue rounded-3xl">
                      <Check className="w-8 h-8 sm:hidden" />
                      <span className="hidden sm:block">Agregar</span>
                  </button>
              </div>
          </div>
        </>
  )
}