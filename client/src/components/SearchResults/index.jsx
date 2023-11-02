import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EditIcon, MoreOptionsIcon } from "../Icons";

function SearchResults({productName, stock, setAlertDelete}) {
  return (
    <tr
      className='border-b sm:border-b-4 border-custom-button-hover last:border-b-0'
    >
      <td className='px-5 py-1 flex items-center min-w-[168px]'>
        <img width={50} className='inline-block mr-2' src='/images/media.png' />
        {productName}
      </td>
      <td className='px-5 py-1'>{stock}</td>
      <td className='px-5 py-1'>
        <div className='flex items-center justify-center'>
          <Menu as='div' className='relative'>
            <Menu.Button aria-label='Mas opciones' className='text-custom-blue'>
              <EditIcon className='hidden sm:inline-block' />
              <MoreOptionsIcon className='sm:hidden' />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute top-full mt-2 right-0 bg-[#E7E7E7] flex flex-col rounded shadow z-10 min-w-[130px]'>
                <Menu.Item>
                  {(active) => (
                    <button
                      className={`text-left px-4 py-2 ${
                        active ? 'hover:text-custom-blue' : ''
                      }`}
                    >
                      Editar
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {(active) => (
                    <button
                      className={`text-left px-4 py-2 ${
                        active ? 'hover:text-custom-blue' : ''
                      }`}
                      onClick={() => setAlertDelete(true)}
                    >
                      Eliminar
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </td>
    </tr>
  );
}

export default SearchResults;
