import React from 'react'
import { useNavigate } from 'react-router-dom';

const Content = () => {
 const navigate = useNavigate();

 const HandleBooking = () => {
   navigate('/travel');
 }
 const HandleContact = () => {
   navigate('/contact');
 }

  return (
    <div className="flex p gap-[20px] flex-col">
      <div className="font-[600] p-[10px] pl-[30px] border-l-4 border-l-[#1976D2] rounded-l-[10px, 1px, 1px, 10px] p text-[30px] sm:text-[38px] xl:text-[48px] text-white leading-[72px]">
        <p>What is TripTix</p>
        <p>And how valid is it?</p>
      </div>
      <div className="w-auto flex flex-col gap-[20px] font-[400] text-[17px] leading-[30px] text-white">
        <p className="inline-block">
          Welcome to TripTrix, your ultimate travel companion for
          seamless online ticket booking! At TripTix, we understand
          that planning a journey can be stressful, and we're here to simplify
          that process for you. Whether you're traveling for business or
          leisure, our platform offers a user-friendly interface that allows you
          to book your travel tickets with ease and efficiency.
        </p>
        <p>
          Join us on your next adventure and let TripTix be your
          trusted partner in travel!
        </p>
      </div>
      <div className="flex gap-[20px] font-[500] text-[18px] leading-[21.94px] ">
        <div onClick={HandleBooking} className="cursor-pointer border flex justify-center p-[10px] rounded-[8px] px-[20px] items-center bg-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
          <p className="text-black">Book Now</p>
        </div>
        <div onClick={HandleContact}
          className="cursor-pointer border border-[#E2E8F0] flex justify-center p-[10px] rounded-[8px] px-[20px] items-center bg-transparent drop-shadow-xl shadow-[0px_4px_10px_#00000026]"
        >
          <p className="text-white">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Content
