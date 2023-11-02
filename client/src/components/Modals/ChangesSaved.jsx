import {Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Check } from 'react-feather'

const ChangesSaved = ({showModal, setShowModal}) => {
  return (
    <Transition.Root show={showModal} as={Fragment}>
        <Dialog as='div' className='relative z-10' initialFocus={setShowModal} onClose={setShowModal}>
            <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
            </Transition.Child>
            <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                <div className='flex min-h-full justify-center items-center p-4 text-center sm:p-0'>
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
                            <div className='bg-white mt-[0.938rem] sm:mt-[3.125rem] mb-[1.063rem] sm:mb-8 px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                                <div className='flex flex-col items-center gap-6'>
                                    <div className='mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-24 sm:w-24'>
                                        <div className='mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-green-600 sm:mx-0'>
                                            <Check className='text-custom-white' />
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 px-8 sm:px-0">
                                        <Dialog.Title as="h3" className="text-base sm:text-lg font-medium text-center leading-6 text-gray-900">
                                            ¡Tus cambios se han guardado correctamente! 
                                        </Dialog.Title>
                                        <Dialog.Title as="h3" className="text-base sm:text-lg font-medium text-center leading-6 text-gray-900">
                                            Tu ítem ha sido actualizado
                                        </Dialog.Title>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition.Root>
  )
}

export default ChangesSaved
