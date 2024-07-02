import React from "react";

const ViewTicket = () => {
  return (
    <div className="view-ticket cursor-pointer mt-[250px] sm:mt-[0px] w-full px-12 pt-[300px] pb-[100px] h-auto flex flex-col gap-[20px] justify-center items-center bg-white">
      <p className=" text-[#616262] font-[600] text-[30px] xl:text-[35px] lg:text-[35px] justify-center text-center leading-[42.36px]">
        View your previously booked tickets
      </p>
      <div className="text-[#0E385C] rounded-[8px] p-[10px] px-[20px] border bg-transparent font-[500] text-[22px] leading-[26.63px] border-[#0E385C]">
        View tickets
      </div>
    </div>
  );
};

export default ViewTicket;
