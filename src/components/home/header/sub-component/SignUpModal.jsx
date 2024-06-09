import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { google } from "../../../../assets/images";
import SignInModal from "./SignInModal";

const SignUpModal = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleShowSignInModal = () => {
    setShowSignInModal(true);
  };

  const handleCloseSignInModal = () => {
    setShowSignInModal(false);
  };

  const toggle = () => {
    setOpen(!open);
  }

  return (
    <div>
      {isOpen && (
        <div>
          <div className="modalAnimation p flex h-auto flex-col gap-[30px] items-center py-7 lg:w-[90vw] w-[93vw] xl:w-[80vw]  p-7 bg-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] fixed">
            <div className="flex w-full h-full">
              <div className="w-[50%] content-text px-[20px] pr-[40px] flex gap-[15px] flex-col">
                <span className="absolute p-[5px] text-black border-[2px] rounded-[20px] border-black top-10 right-14">
                  <AiOutlineClose size={"1.5rem"} onClick={onClose} />
                </span>
                <h1 className="text-3xl font-medium text-black">StephTour</h1>
                <p className="mt-[15px] font-medium lg:font-[590] text-[#2C2D2E] text-[30px] leading-[45px]">
                  Create an Account 👋
                </p>
                <p className="text-[#8692A6] font-[400] text-[18px] leading-[28px]">
                  Kindly fill in your details to create an account
                </p>

                <form action="#" className="flex flex-col gap-[15px] w-full">
                  <div className="flex flex-col text-[#696F79] font-[500] text-[16px] leading-[24px] gap-[5px]">
                    <p>Your fullname*</p>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="border border-[#282A2F] focus:outline-none focus:shadow-outline bg-[#EFF0F3] rounded-[5px] p-[15px] w-full"
                    />
                  </div>
                  <div className="flex flex-col text-[#696F79] font-[500] text-[16px] leading-[24px] gap-[5px]">
                    <p>Email address*</p>
                    <input
                      type="text"
                      placeholder="Enter email address"
                      className="border border-[#282A2F] focus:outline-none focus:shadow-outline bg-[#EFF0F3] rounded-[5px] p-[15px] w-full"
                    />
                  </div>
                  <div className="flex flex-col text-[#696F79] font-[500] text-[16px] leading-[24px] gap-[5px]">
                    <p>Your Password*</p>
                    <div className="flex justify-between border border-[#282A2F] bg-[#EFF0F3] rounded-[5px]">
                      <input
                        type={open === false ? "password" : "text"}
                        placeholder="Enter your password"
                        className="bg-[#EFF0F3] w-full p-[15px] focus:outline-none focus:shadow-outline"
                      />
                      <div className="flex justify-center items-center p-[15px] text-xl">
                        {open === false ? (
                          <FiEyeOff onClick={toggle} />
                        ) : (
                          <FiEye onClick={toggle} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[10px] text-[#696F79] font-[500] text-[16px] leading-[24px]">
                    <input
                      type="checkbox"
                      id="terms"
                      className="custom-checkbox"
                    />
                    <label htmlFor="terms">I agree to terms & conditions</label>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#5871EB] p-[15px] rounded-[6px] font leading-[19.36px] text-[16px] text-white font-medium "
                  >
                    Register Account
                  </button>
                </form>
                <div className="flex justify-center items-center gap-6 text-[#2C2D2E] w-full p-[10px]">
                  <hr className="w-[50%]" />
                  <p className="font-[400] text-[14px] leading-[16.94px]">or</p>
                  <hr className="w-[50%]" />
                </div>
                <button className="flex p-[15px] justify-center px-[50px] rounded-[6px] font text-[16px] font-medium gap-6 bg-black text-white items-center">
                  <div className="w-[20px]">
                    <img src={google} alt="google" />
                  </div>
                  Register with Google
                </button>
                <div className="flex justify-center items-center text-[16px] leading-[24px]">
                  <p className="text-[#696F79] font-[500]">already have an account? <span onClick={handleShowSignInModal} className="text-[#0E385C] text-[17px] font-[590] cursor-pointer font">Sign in</span></p>
                </div>
              </div>
              <div className="signup rounded-[20px] w-[50%]">
                <span className="absolute p-[5px] border-[2px] rounded-[20px] border-black top-10 right-14">
                  <AiOutlineClose size={"1.5rem"} onClick={onClose} />
                </span>
              </div>
              {showSignInModal && (
                <SignInModal
                  isOpen={showSignInModal}
                  onClose={handleCloseSignInModal}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpModal;
