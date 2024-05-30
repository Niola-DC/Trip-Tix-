import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../../../helper/logo";

const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <div>
      {isOpen && (
        <div>
          <div className="modalAnimation p flex h-auto flex-col gap-[30px] items-center py-7 lg:w-[90vw] w-[93vw] xl:w-[80vw]  p-7 bg-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] fixed">
            <div className="flex w-full h-full">
              <div className="w-[50%] content-text px-[20px] pr-[40px] flex gap-[15px] flex-col">
                <h1 className="text-3xl font-medium text-black">StephTour</h1>
                <p className="mt-[15px] font-[600] text-[#2C2D2E] text-[30px] leading-[45px]">
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
                      className="border border-[#282A2F] bg-[#EFF0F3] rounded-[5px] p-[15px] w-full"
                    />
                  </div>
                  <div className="flex flex-col text-[#696F79] font-[500] text-[16px] leading-[24px] gap-[5px]">
                    <p>Email address*</p>
                    <input
                      type="text"
                      placeholder="Enter email address"
                      className="border border-[#282A2F] bg-[#EFF0F3] rounded-[5px] p-[15px] w-full"
                    />
                  </div>
                  <div className="flex flex-col text-[#696F79] font-[500] text-[16px] leading-[24px] gap-[5px]">
                    <p>Create password*</p>
                    <input
                      type="text"
                      placeholder="Create password"
                      className="border border-[#282A2F] bg-[#EFF0F3] rounded-[5px] p-[15px] w-full"
                    />
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
                    className="bg-[#5871EB] p-[15px] rounded-[6px] font leading-[19.36px] text-[16px] text-white font-[500] "
                  >
                    Register Account
                  </button>
                </form>
                <div className="flex justify-center items-center gap-2 text-[#2C2D2E] w-full p-[10px]">
                  <hr className="w-[50%]" />
                  <p className="font-[400] text-[14px] leading-[16.94px]">or</p>
                  <hr className="w-[50%]" />
                </div>
              </div>
              <div className="signup rounded-[20px] w-[50%]">
                <span className="absolute p-[5px] border-[2px] rounded-[20px] border-black top-10 right-14">
                  <AiOutlineClose size={"1.5rem"} onClick={onClose} />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpModal;
