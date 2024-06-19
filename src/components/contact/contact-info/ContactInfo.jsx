import React from 'react'
import { buses } from '../../../assets/images'

const ContactInfo = () => {
    return (
        <div className='mt-[500px] grid grid-cols-1 xl:grid-cols-2 w-full lg:grid-cols-2 gap-[50px] h-auto p-[40px] sm:mt-[200px]'>
            <div className="w-[100%] con max-w-[1000px] flex items-center justify-center">
                <div className="header_bus faq-img1 -mt-[15px] rounded-[10px] w-[80%] h-[400px]"></div>
                <div className="w-[40%] faq-img2 -ml-[150px] mt-[220px] min-h-[200px]">
                    <img src={buses} alt="buses" />
                </div>
            </div>
            <div className='flex flex-col gap-5 px-8 justify-center items-center'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#FBD007] font-[590] text-lg'>Lagos Address</p>
                    <p className="cursor-pointer inline-block font-medium text-black">
                        Churchill Executive Tower, Business Bay, Dubai, UAE P.O.Box:
                        28824 Dubai.UAE
                    </p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#FBD007] font-[590] text-lg'>Abuja Address</p>
                    <p className="cursor-pointer inline-block font-medium text-black">
                        University neighborhood, Civan Alley, No:1, Allure tower,
                        unit:384 Avcilar/Istanbul
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
