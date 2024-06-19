import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";

const GetStartedModal = ({ onClose, setFormType }) => {
  return (
    <div className="modalAnimation flex flex-col border border-black gap-[30px] items-center py-[40px] lg:w-[100%] rounded-[60px] w-[95%] md:w-[90%] h-auto p-5 sm:p-7 bg-white">
      <div className="flex items-center border-b-4 border-b-[#225B8B] pb-[20px] w-full relative justify-center">
        <p className="lg:font-[590] font-medium leading-[29.3px] text-[20px] sm:text-[25px] text-[#2C2D2E]">
          Login / Get My Tickets
        </p>
        <span className="absolute text-black top-0 right-0">
          <IoCloseSharp size={"2rem"} onClick={onClose} />
        </span>
      </div>
      <div className="flex flex-col text-black justify-center items-center">
        <p>Login to download or manage your tickets.</p>
        <p>Please select your preferred login method</p>
      </div>
      <div
        onClick={() => setFormType("signin")}
        className="border-[3px] rounded-[10px] p-[10px] sm:p-[20px] text-[#3E6F99] border-[#3E6F99] w-full flex justify-between items-center"
      >
        <p className="font-[400] text-[18px] leading-[21.09px]">
          Click here to sign in
        </p>
        <div className="flex justify-center items-center">
          <SlArrowRight size={"1.5rem"} />
        </div>
      </div>
      <div
        onClick={() => setFormType("signup")}
        className="border-[3px] p-[10px] sm:p-[20px] rounded-[10px] text-[#3E6F99] border-[#3E6F99] w-full flex justify-between items-center"
      >
        <p className="font-[400] text-[18px] leading-[21.09px]">
          Click here to create an account
        </p>
        <div className="flex justify-center items-center">
          <SlArrowRight size={"1.5rem"} />
        </div>
      </div>
    </div>
  );
};

export default GetStartedModal;
