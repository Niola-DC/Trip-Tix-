import React from 'react'
import PhoneNumberInput from './PhoneNumberInput'

const ContactContent = () => {
    return (
        <div className='h-auto'>
            <div className='flex flex-col mb-[50px] gap-4 justify-center p text-white items-center'>
                <p className='sm:text-6xl text-4xl font-[900]'>CONTACT US</p>
                <p className='text-base font-medium'>We’re here to help and answer any questions you might have. We look forward to hearing from you!</p>
            </div>
            <div className='bg-white px-[20px] py-[30px] flex flex-col rounded-xl h-auto drop-shadow-xl shadow-[0px_4px_10px_#00000026]'>
                <form action="#">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div className='flex mt-3 flex-col gap-2'>
                            <p className='font-medium'>Name <span className='text-red-600'>*</span></p>
                            <input type='text' placeholder='Your full name' className='bg-[#E1EBFF] p-3 rounded-lg focus:outline-none text-black focus:shadow-outline' />
                        </div>
                        <div className='flex mt-3 flex-col gap-2'>
                            <p className='font-medium'>Email <span className='text-red-600'>*</span></p>
                            <input type='text' placeholder='Your email' className='bg-[#E1EBFF] p-3 rounded-lg focus:outline-none text-black focus:shadow-outline' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                        <div className='flex mt-3 flex-col gap-2'>
                            <p className='font-medium'>Phone <span className='text-red-600'>*</span></p>
                            <PhoneNumberInput />
                        </div>
                        <div className='flex mt-3 flex-col gap-2'>
                            <p className='font-medium'>Subject <span className='text-red-600'>*</span></p>
                            <input type='text' placeholder='Subject' className='bg-[#E1EBFF] p-3 rounded-lg focus:outline-none text-black focus:shadow-outline' />
                        </div>
                    </div>
                    <div className='w-full mt-3 flex flex-col gap-2'>
                        <p className='font-medium'>Message <span className='text-red-600'>*</span></p>
                        <textarea className='bg-[#E1EBFF] w-full p-3 h-30 rounded-lg focus:outline-none text-black focus:shadow-outline' placeholder='Write your message'></textarea>
                    </div>
                    <button className='bg-blue-600 font-medium text-white w-full mt-9 py-3 rounded-lg drop-shadow-xl shadow-[0px_4px_10px_#00000026] px-4'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactContent
