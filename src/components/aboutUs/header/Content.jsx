import React from 'react'

const Content = () => {
  return (
    <div className="flex p gap-[20px] flex-col">
      <div className="font-[600] p-[10px] pl-[30px] border-l-4 border-l-[#1976D2] rounded-l-[10px, 1px, 1px, 10px] p text-[48px] text-white leading-[72px]">
        <p>What is NIIT Travel Buddy</p>
        <p>And how valid is it?</p>
      </div>
      <div className="w-auto flex flex-col gap-[20px] font-[400] text-[16px] leading-[30px] text-[#C2C2C2]">
        <p className="inline-block">
          Welcome to Niit Travel Buddy, your ultimate travel companion for
          seamless online ticket booking! At Niit Travel Buddy, we understand
          that planning a journey can be stressful, and we're here to simplify
          that process for you. Whether you're traveling for business or
          leisure, our platform offers a user-friendly interface that allows you
          to book your travel tickets with ease and efficiency.
        </p>
        <p>
          Join us on your next adventure and let Niit Travel Buddy be your
          trusted partner in travel!
        </p>
      </div>
      <div className="flex gap-[20px] font-[500] text-[18px] leading-[21.94px] ">
        <div className="cursor-pointer border flex justify-center p-[10px] rounded-[8px] px-[20px] items-center bg-white drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
          <p className="text-black">Book Now</p>
        </div>
        <div
          className="cursor-pointer border border-[#E2E8F0] flex justify-center p-[10px] rounded-[8px] px-[20px] items-center bg-transparent drop-shadow-xl shadow-[0px_4px_10px_#00000026]"
        >
          <p className="text-white">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Content
