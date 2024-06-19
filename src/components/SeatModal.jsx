import React from 'react'
import { IoClose } from 'react-icons/io5';
import { PiSeat } from "react-icons/pi";
import Seats from './Seats';

const SeatModal = ({ isOpen, onClose }) => {
    return (
        <div>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content card_details gap-10 rounded-[20px] p-[10px] px-[20px] sm:px-[40px] h-auto sm:flex w-auto overflow-hidden overflow-y-auto drop-shadow-xl bg-white shadow-[0px_4px_10px_#00000026]">
                        <div className='py-[40px]'>
                            <Seats/>
                        </div>
                        <div className='flex py-[40px] gap-5 flex-col justify-center items-center'>
                            <div className='flex gap-4 items-center'>
                                <PiSeat size={"2rem"} className='text-[#0B142F]'/>
                                <p className='text-lg font-medium text-black'>Available Seat</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <PiSeat size={"2rem"} className='text-green-600'/>
                                <p className='text-lg font-medium text-black'>Booked Seat</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <PiSeat size={"2rem"} className='text-amber-500'/>
                                <p className='text-lg font-medium text-black'>Blocked Seat</p>
                            </div>
                        </div>
                        <span
                            onClick={onClose}
                            className="absolute rounded-[20px] drop-shadow-xl flex justify-center cursor-pointer shadow bg-gray-400 text-white items-center top-4 right-4 border  transform transition-transform duration-300 hover:scale-105"
                        >
                            <IoClose size={"1.5rem"} />
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SeatModal
