import React, { useState } from "react";
import { bus2 } from "../../../assets/images";
import GetStartedModal from "../header/sub-component/GetStartedModal";

const Why = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true); // Always open the Dashboard
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the Dashboard
  };

  const items = [
    "Manage and cancel your trip with ease",
    "Save your payment method and billing information",
    "Save up to 5 passengers to your account",
  ];

  return (
    <div className="w-full Why-us h-auto gap-[100px] items-center flex xl:flex-row lg:flex-row flex-col relative pt-8 bg-[#E1EBFF] xl:px-12 lg:px-12 sm:px-10 px-[20px]">
      <div className="flex w-full pb-[20px] xl:w-[50%] flex-col justify-center item-center text-[#0E385C]">
        <p className="font-[800] border text-left text-[41px] sm:text-[50px] xl:text-[53px] lg:text-[53px] leading-[62.11px] pb-[10px]">
          Why book with us?
        </p>
        <p className="font-[700] text-[25px] leading-[29.3px] pb-[10px]">
          Fast booking and checkout
        </p>
        <ul className="ul font-[400] text-[14px] leading-[23.98px]">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div onClick={handleShowModal} className="bg-[#0E385C] cursor-pointer font-medium mt-[20px] text-white w-[171px] flex justify-center items-center rounded-[10px] p-[16px]">
          Create Account
        </div>
      </div>

      <div className="flex w-[100%] xl:w-[50%]  justify-center items-center ">
        <div className="-mt-[50px] xl:-mt-[80px]">
          <img src={bus2} alt="bus" />
        </div>
      </div>
      <GetStartedModal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Why;
