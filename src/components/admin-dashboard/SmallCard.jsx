import React from 'react'


export default function SmallCard({icon, text, num}) {
  return (
    <div className='rounded-lg shadow-lg bg-white p-5'>
      <div className="flex space-x-4">
        <div className='w-12 h-12 text-xl bg-[#FBD007] text-[#0E385C] rounded-full items-center flex justify-center'>
          {icon}
        </div>
        <div>
          <p className='font-medium'>{text}</p>
          <h3 className='text-2xl text-black font-[590]'>{num}</h3>
        </div>
      </div>
    </div>
  )
}
