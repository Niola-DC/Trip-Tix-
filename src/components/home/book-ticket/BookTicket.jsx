import React from "react";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaBusSimple } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdEventSeat } from "react-icons/md";

const BookTicket = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-[60px] justify-center items-center py-[100px] px-12 bg-[#F1F1F1]">
      <p className="text-[#2C2D2E] font-[700] text-center text-[34px] xl:text-[37px] lg:text-[37px] leading-[44.8px]">
        Book your <span className=" text-[#0E385C]">tickets</span> in four steps
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-[40px]">
        <div className="flex flex-col gap-[15px] justify-center items-center">
          <div className="text-center text-[#0E385C] bg-[#CDCDCD] p-[4px] rounded-[20px] border">
            <FaBusSimple size={"1.5rem"} />
          </div>
          <p className="p font-[700] text-[#0E385C] text-[18px] leading-[21.78px]">
            Search
          </p>
          <p className="p font-[400] flex text-[16px] text-center leading-[19.38px]">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col gap-[15px] justify-center items-center">
          <div className="text-center text-[#0E385C] bg-[#CDCDCD] p-[4px] rounded-[20px] border">
            <MdEventSeat size={"1.5rem"} />
          </div>
          <p className="p font-[700] text-[#0E385C] text-[18px] leading-[21.78px]">
            Select Seat
          </p>
          <p className="p font-[400] flex text-[16px] text-center leading-[19.38px]">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col gap-[15px] justify-center items-center">
          <div className="text-center text-[#0E385C] bg-[#CDCDCD] p-[4px] rounded-[20px] border">
            <FaMoneyCheckDollar size={"1.5rem"} />
          </div>
          <p className="p font-[700] text-[#0E385C] text-[18px] leading-[21.78px]">
            Make Payment
          </p>
          <p className="p font-[400] flex text-[16px] text-center leading-[19.38px]">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col gap-[15px] justify-center items-center">
          <div className="text-center text-[#0E385C] bg-[#CDCDCD] p-[4px] rounded-[20px] border">
            <BsFillTicketPerforatedFill size={"1.5rem"} />
          </div>
          <p className="p font-[700] text-[#0E385C] text-[18px] leading-[21.78px]">
            Recieve Ticket
          </p>
          <p className="p font-[400] flex text-[16px] text-center leading-[19.38px]">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
