import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AlertCircle } from 'react-feather';

function DeleteItem({
  alertDelete,
  setAlertDelete,
  setRemovedmsg,
  onClickCallback,
}) {
  return (
    <Transition.Root show={alertDelete} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={setAlertDelete}
        onClose={setAlertDelete}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
        </Transition.Child>
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white mt-[3.125rem] mb-8 px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='flex flex-col items-center gap-6'>
                    <div className='mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-red-300 sm:mx-0 sm:h-24 sm:w-24'>
                      <AlertCircle className='mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-custom-white bg-red-700 sm:mx-0' />
                    </div>
                    <div className='mt-3 text-center sm:mt-0'>
                      <Dialog.Title
                        as='h3'
                        className='text-base sm:text-lg font-medium text-center leading-6 text-gray-900'
                      >
                        ¿Estás seguro que deseas eliminar este ítem?
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div className='mx-[1.688rem] mb-8 px-8 py-3 flex flex-row-reverse gap-[1.875rem] '>
                  <button
                    className='flex items-center justify-center w-24 h-10 py-2.5 text-custom-white bg-blue-gradient text-sm border border-custom-blue rounded-3xl'
                    onClick={async () => {
                      await onClickCallback();
                      setAlertDelete(false);
                      setRemovedmsg(true);
                    }}
                  >
                    Aceptar
                  </button>
                  <button
                    className='flex items-center justify-center w-24 h-10 py-2.5 text-custom-blue border border-custom-blue rounded-3xl text-sm'
                    onClick={() => setAlertDelete(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default DeleteItem;
