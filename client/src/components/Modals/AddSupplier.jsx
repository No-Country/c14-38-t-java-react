import { useState } from "react"
import { Search, Check } from "react-feather"

const supplier = [
    {id: 1, name: 'MicroGlobal'}
]

const AddSupplier = ({isSupplierModal, setIsSupplierModal, setSupplier}) => {
    const [selectSupplier, isSelectSupplier] = useState(false)
    const [selectedSupplier, setSelectedSupplier] = useState("");

    const handleItemClick = (supplierName) => {
        setSelectedSupplier(supplierName);
    };

    const handleAddClick = () => {
        setSupplier(selectedSupplier);
        setIsSupplierModal(false);
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-gray-100 sm:bg-white p-4 sm:pt-9 sm:pb-8 sm:rounded-xl flex flex-col sm:justify-center sm:align-baseline gap-5 absolute sm:relative w-full sm:w-auto h-full sm:h-auto overflow-auto sm:overflow-visible">
                <button className="absolute sm:top-0 sm:right-0 sm:my-4 mt-0.5 ml-3 sm:mx-8" onClick={() => setIsSupplierModal(false)}>
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6 hidden sm:block text-custom-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <h3 className="flex font-[Roboto] text-xl font-medium items-start mx-12 sm:mx-16 text-custom-black">Proveedores</h3>
                <div className="flex flex-col gap-5 mx-4 sm:ml-0 sm:mr-0">
                    <div className="flex items-center bg-gray-200 rounded-3xl shadow-sm ring-1 ring-inset ring-custom-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-blue sm:w-auto lg:w-96 lg:h-10 sm:ml-14 sm:mr-16">
                        <Search className="w-4 h-4 ml-4 text-custom-black"/>
                        <input type="text" className="block flex-1 border-0 bg-transparent py-2.5 pl-3 pr-6 text-custom-black placeholder:text-custom-black focus:ring-0 sm:text-sm sm:leading-6" placeholder="Buscar proveedor" />
                    </div>
                    <button className="sm:flex hidden justify-start items-center bg-gray-200  text-custom-black py-2.5 pl-3 pr-6 w-auto lg:w-96 lg:h-10 ml-14 mr-16 border border-solid border-custom-gray rounded" onClick={() => isSelectSupplier(true)}>
                      <span className="flex ml-5 text-sm">+ Agrega un proveedor nuevo</span>
                  </button>
                  <div className="h-screen sm:h-36 sm:ml-14 sm:mr-16 overflow-auto">
                    <ul className="flex flex-col gap-0.5 bg-white">
                        {selectSupplier && (
                                supplier.map((item) => (
                                    <div key={item.id} className="flex flex-col gap-0.5">
                                        <li key={item.id} className={`bg-gray-200 text-custom-black py-2.5 px-8 cursor-pointer border border-solid  ${selectedSupplier === item.name ? 'border-custom-blue' : ''}`} onClick={() => handleItemClick(item.name)}>{item.name}</li>
                                        {selectedSupplier === item.name && ( <span className="text-custom-blue text-xs">Podrás agregar más información en la sección de "Proveedores"</span>)}
                                    </div>
                                    )
                                )
                        )}
                   </ul>
                  </div>
                    <div className="flex justify-end gap-8 mx-3 sm:mx-8 sm:mt-auto">
                        <button className="hidden sm:flex items-center justify-center w-24 h-10 py-2.5 text-custom-blue border border-custom-blue rounded-3xl text-sm" onClick={() => setIsSupplierModal(false)}>Cancelar</button>
                        <button className="flex items-center justify-center w-8 h-8 sm:w-24 sm:h-10 absolute sm:static top-4 text-custom-blue sm:text-custom-white sm:bg-blue-gradient sm:text-sm sm:border sm:border-custom-blue rounded-3xl" onClick={handleAddClick}>
                            <Check className="w-8 h-8 sm:hidden"/>
                            <span className="hidden sm:block">Agregar</span>
                        </button>
                        <button className="flex sm:hidden justify-center items-center fixed bottom-10 right-4 bg-custom-blue text-custom-white w-14 h-14 rounded-full z-10">
                            <span className="flex sm:hidden text-2xl">+</span>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
    )
  }
  
export default AddSupplier