import React from "react";
import { bus2 } from "../../../assets/images";

const Why = () => {
  const items = [
    "Manage and cancel your trip with ease",
    "Save your payment method and billing information",
    "Save up to 5 passengers to your account",
  ];

  return (
    <div className="w-full Why-us h-[370px] grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 relative py-8 bg-[#E1EBFF] px-12">
      <div className="flex flex-col justify-center item-center text-[#0E385C]">
        <p className="font-[800] text-left text-[53px] leading-[62.11px] pb-[10px]">
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
        <div className="bg-[#0E385C] cursor-pointer font-medium mt-[20px] text-white w-[171px] flex justify-center items-center rounded-[10px] p-[16px]">Create Account</div>
      </div>

      <img
        className="w-[50%] pt-[20px] xl:absolute lg:absolute right-0 -top-[70px]"
        src={bus2}
        alt="bus"
      />
    </div>
  );
};

export default Why;
