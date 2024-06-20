import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const GetStartedModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  }

  const handleSignUp = () => {
    navigate('/signUp');
  }

  return (
    <div>
      {isOpen && (
        <div>
          <div className="fixed top-0 left-0 bg-black/80 w-full h-[100dvh] z-[50]" />
          <div className="modalAnimation flex flex-col gap-[30px] items-center py-[40px] lg:w-[50%] rounded-[60px] w-[95%] md:w-[80%] h-auto p-5 sm:p-7 bg-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[100] fixed">
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
            <div onClick={handleLogin} className="border-[3px] rounded-[10px] p-[10px] sm:p-[20px] text-[#3E6F99] border-[#3E6F99] w-full flex justify-between items-center">
                <p className="font-[400] text-[18px] leading-[21.09px]">
                  Click here to sign in
                </p>
                <div className="flex justify-center items-center">
                  <SlArrowRight size={"1.5rem"} />
                </div>
              </div>
              <div
                onClick={handleSignUp}
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
          
        </div>
      )}
    </div>
  );
};

export default GetStartedModal;
