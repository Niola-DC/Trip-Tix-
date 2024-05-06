import React, { useState } from "react";
import { FaBusSimple } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { RiBus2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

export default function SearchSort() {
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
   const [activeLink, setActiveLink] = useState("bus1");

   const handleClick = (link) => {
     setActiveLink(link);
   };

  const handleDateChange = (event) => {
    const formattedDate = event.target.value
      .replace(/[^\d]/g, "")
      .substring(0, 8)
      .replace(/(\d{2})(\d{0,2})(\d{0,4})/, "$1/$2/$3");
    setDate(formattedDate);
  };

  const handleReturnDateChange = (event) => {
    const formattedDate = event.target.value
      .replace(/[^\d]/g, "")
      .substring(0, 8)
      .replace(/(\d{2})(\d{0,2})(\d{0,4})/, "$1/$2/$3");
    setReturnDate(formattedDate);
  };

  return (
    <div className=" flex flex-col overflow-hidden overflow-y-auto text-white rounded-[5px] text-sm tracking-wide">
      <div className=" bg-[#0E385C] bg-opacity-[80%] p-[30px] drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
        <div className="flex w-full mb-[20px] gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <p>Your choice</p>
            <div className="grid grid-cols-3 gap-[15px]">
              <div
                className={`rounded-[5px] flex justify-center items-center p-[10px] bg-[white] text-[#0E385C] ${
                  activeLink === "bus1" ? "bg-[#FBD007]" : ""
                }`}
                onClick={() => handleClick("bus1")}
              >
                <FaBusSimple size={"1.3rem"} />
              </div>
              <div
                className={`rounded-[5px] flex justify-center items-center p-[10px] bg-[white] text-[#0E385C] ${
                  activeLink === "bus2" ? "bg-[#FBD007]" : ""
                }`}
                onClick={() => handleClick("bus2")}
              >
                <RiBus2Fill size={"1.3rem"} />
              </div>
              <div
                className={`rounded-[5px] flex justify-center items-center p-[10px] bg-[white] text-[#0E385C] ${
                  activeLink === "car" ? "bg-[#FBD007]" : ""
                }`}
                onClick={() => handleClick("car")}
              >
                <FaCar size={"1.3rem"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] w-[30%]">
            Trip
            <select className="text-black p-[10px] focus:outline-none focus:shadow-outline rounded-[5px]">
              <option value="">Local</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 w-full gap-[15px] mb-[20px]">
          <div className="w-full flex flex-col gap-[5px]">
            <p>From</p>
            <div className="flex border rounded-[5px] bg-white items-center">
              <div className="p-[10px] pr-[0px] text-[#2C2D2E] text-opacity-[61%]">
                <FaLocationDot />
              </div>
              <input
                type="text"
                className="w-full focus:outline-none text-black focus:shadow-outline p-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-[5px]">
            <p>To</p>
            <div className="flex border bg-white rounded-[5px] items-center">
              <div className="p-[10px] pr-[0px] text-[#2C2D2E] text-opacity-[61%]">
                <FaLocationDot />
              </div>
              <input
                type="text"
                className="w-full focus:outline-none text-black focus:shadow-outline p-[10px]"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-[20px] mb-[20px]">
          <div className="flex flex-col gap-[5px]">
            <p>Departs</p>
            <div className="flex bg-white rounded-[5px] items-center">
              <div className="p-[10px] pr-[0px] text-[#2C2D2E] text-opacity-[61%]">
                <FaCalendarAlt />
              </div>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                value={date}
                onChange={handleDateChange}
                className="text-black focus:outline-none rounded-r-[5px] w-full text-black focus:shadow-outline p-[10px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            <p>Returns</p>
            <div className="flex bg-white rounded-[5px] items-center">
              <div className="p-[10px] pr-[0px] text-[#2C2D2E] text-opacity-[61%]">
                <FaCalendarAlt />
              </div>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                value={returnDate}
                onChange={handleReturnDateChange}
                className="text-black focus:outline-none rounded-r-[5px] w-full text-black focus:shadow-outline p-[10px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            Adult (18+)
            <select className="text-black p-[10px] focus:outline-none focus:shadow-outline rounded-[5px]">
              <option value="">Select</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
            </select>
          </div>
          <div className="flex flex-col gap-[5px]">
            Chrildren (0-17)
            <select className="text-black p-[10px] focus:outline-none focus:shadow-outline rounded-[5px]">
              <option value="">Select</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between mb-[0px]">
          <div className="bg-[#FBD007] p-[10px] text-[25px] font-[600] text-[#0E385C] flex justify-center items-center px-[50px] rounded-[5px]">
            SEARCH
          </div>
          <div>
            <select className="text-white p-[10px] bg-transparent border-hidden focus:outline-none focus:shadow-outline rounded-[5px]">
              <option value="">Advance Options</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
              <option value="">Hello</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white leading-[30.26px] text-[25px] p-[30px] border drop-shadow-xl border-b border-b-white shadow-[0px_4px_10px_#00000026] text-[#0E385C] grid grid-cols-1 xl:grid-cols-3 grid-cols-2">
        <div className="text-left">
          <p className="font-[600]">BOOK AND TRAVEL</p>
          <p className="font-[500]">WITH EASE</p>
        </div>
        <div className="text-center">
          <p className="font-[600]">FAST & QUICK</p>
          <p className="font-[500]">PICKUP SERVICE</p>
        </div>
        <div className="flex justify-end items-center">
          <div className="bg-[#FBD007] w-[50%] font-[600] rounded-[5px] flex justify-center items-center p-[10px]">
            BOOK TICKET
          </div>
        </div>
      </div>
    </div>
  );
}
