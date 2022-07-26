import React, { useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Bounce from 'react-reveal/Bounce';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9cbnr5d', 'template_60be85e', form.current, '0E_f0wp1IC3soVuuK')
      .then((result) => {
          console.log(result.text==='Success');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };

    // modal
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

  return (
    <div name='contact' className=' antialiased transition-all duration-500 w-full h-screen bg-white text-[#1C1E21] dark:bg-[#0F172A] select-none pt-96'>
        <div className='container'>
          <Bounce left>
        <div className='md:text-center sm:text-right pb-8 pl-4 dark:text-gray-300 select-none'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Contact
            </p>
          </div>
          </Bounce>
            <form ref={form} onSubmit={sendEmail}>
            <Bounce top cascade>
            <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
                <label htmlFor="name" className='text-base dark:text-white font-bold'>Name</label>
                <input type="text" id='name' name='name' placeholder='Your Full Name' required className='w-full dark:bg-[#1E293B] dark:text-white p-3 rounded-md border-2 border-[#353F4F]/75 place' />
            </div>
            <div className="w-full px-4 mb-8">
                <label htmlFor="email" className='text-base dark:text-white font-bold'>Email</label>
                <input type="text" id='email' name='email' placeholder='Your Email' required className='w-full dark:bg-[#1E293B] dark:text-white p-3 rounded-md border-2 border-[#353F4F]/75 '/>
            </div>
            <div className="w-full px-4 mb-8">
                <label htmlFor="message" className='text-base dark:text-white font-bold'>Message</label>
                <textarea type="text" id='message' name='message' placeholder='Your Message' className='w-full dark:bg-[#1E293B] dark:text-white p-3 rounded-md border-2 border-[#353F4F]/75 ' required ></textarea>
            </div>
            <div className="w-full px-4">
              <button className='btn text-base font-semibold bg-[#1C1E21] text-white hover:bg-white hover:text-[#0F172A] hover:border-[#0F172A] dark:text-[#0F172A] dark:bg-[#a2a2f6] dark:hover:bg-[#0F172A] dark:hover:text-[#a2a2f6] border-2 dark:border-[#0F172A] dark:hover:border-[#a2a2f6] py-3 px-8 rounded-md focus:outline-none'  onClick={openModal}>Send Message</button>
            </div>
            </div>
            </Bounce>
            </form>
        </div>
        {/* modal */}
        <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-green-300 dark:bg-[#a2a2f6] shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Email sent successfully
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-800">
                  Email successfully sent, Thank you for contacting us. Have a nice day ❤️
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="btn inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-green-100 dark:bg-blue-100 border border-transparent rounded-md hover:bg-green-200 dark:hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
    </div>
  )
}

export default Contact