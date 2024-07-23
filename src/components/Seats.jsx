import React from 'react'
import { PiSeat } from "react-icons/pi";
import { RiSteering2Fill } from "react-icons/ri";

const Seats = () => {
    return (
        <div className='grid border-[3px] border-[#666C89] drop-shadow-xl shadow-[0px_4px_10px_#00000026] rounded-lg py-[10px] px-[10px] sm:px-[20px] grid-cols-5 gap-[30px]'>
            <div className='flex flex-col gap-4'>
                <div className='relative'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 p right-0 font-[590] text-base'>15</span>
                </div>
                <div className='relative'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 p right-0 font-[590] text-base'>14</span>
                </div>
                <div className='relative'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute p top-0 right-0 font-[590] text-base'>13</span>
                </div>
                <div className='relative'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute p top-0 right-0 font-[590] text-base'>12</span>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='relative'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 p right-0 font-[590] text-base'>11</span>
                </div>
                <div className='relative mt-14'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute p top-0 right-0 font-[590] text-base'>10</span>
                </div>
                <div className='relative'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 right-1 font-[590] text-base'>9</span>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='relative'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 right-1 font-[590] text-base'>8</span>
                </div>
                <div className='relative mt-14'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 right-1 font-[590] text-base'>7</span>
                </div>
                <div className='relative'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 right-1 font-[590] text-base'>6</span>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='relative mt-14'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 right-1 font-[590] text-base'>3</span>
                </div>
                <div className='relative'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 right-1 font-[590] text-base'>4</span>
                </div>
                <div className='relative'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 right-1 font-[590] text-base'>5</span>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='relative'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 right-1 font-[590] text-base'>1</span>
                </div>
                <div className='relative mb-10'>
                    <PiSeat size={"2rem"} className='mt-1 text-[#0B142F]' />
                    <span className='absolute top-0 right-1 font-[590] text-base'>2</span>
                </div>
                <RiSteering2Fill size={"2rem"} className='text-[#0B142F]' />
            </div>
            
        </div>
    )
}

export default Seats;
