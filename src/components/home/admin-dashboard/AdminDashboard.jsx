import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
    return (
        <div className='flex flex-col bg-[#F1F1F1] gap-4 h-auto justify-center items-center py-[100px] px-[20px] lg:p-[100px]'>
            <div>
                <div className='flex justify-end'>
                    <p className='bg-red-600 font-medium text-white drop-shadow-xl shadow-[0px_4px_10px_#00000026] px-3 py-1 rounded-lg'>Made for you</p>
                </div>
                <p className='text-black text-5xl font-[590] '>Admin Dashboard</p>
            </div>
            <p className='font-medium text-lg text-gray-500'>This Dashboard Is Based On Online Booking</p>
            <Link to={"/EditHomepage"} className='bg-[#0E385C] drop-shadow-xl shadow-[0px_4px_10px_#00000026 text-2xl text-white px-3 py-1 rounded-lg'>Dashboard</Link>
        </div>
    )
}
