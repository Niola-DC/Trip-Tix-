import React, { useState } from "react";
import { FaBusSimple } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { RiBus2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

export default function SearchSort() {
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [activeElement, setActiveElement] = useState("bus1");
  const [activeBook, setActiveBook] = useState("book3");

  const handleElementClick = (element) => {
    setActiveElement(element);
  };

  const handleBookClick = (element) => {
    setActiveBook(element);
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
                className={`bus1 rounded-[5px] flex justify-center items-center p-[10px] bg-[white] text-[#0E385C] ${
                  activeElement === "bus1" ? "active2" : ""
                }`}
                onClick={() => handleElementClick("bus1")}
              >
                <FaBusSimple size={"1.3rem"} />
              </div>
              <div
                className={`bus2 rounded-[5px] flex justify-center items-center p-[10px] bg-[white] text-[#0E385C] ${
                  activeElement === "bus2" ? "active2" : ""
                }`}
                onClick={() => handleElementClick("bus2")}
              >
                <RiBus2Fill size={"1.3rem"} />
              </div>
              <div
                className={`car rounded-[5px] flex justify-center items-center p-[10px] bg-[white] text-[#0E385C] ${
                  activeElement === "car" ? "active2" : ""
                }`}
                onClick={() => handleElementClick("car")}
              >
                <FaCar size={"1.3rem"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] w-[30%]">
            Trip
            <select className="text-black p-[10px] focus:outline-none focus:shadow-outline rounded-[5px]">
              <option value="">Local</option>
              <option value="">International</option>
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
                className="text-black focus:outline-none rounded-r-[5px] w-full focus:shadow-outline p-[10px]"
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
                className="text-black focus:outline-none rounded-r-[5px] w-full focus:shadow-outline p-[10px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[5px]">
            Adult (18+)
            <select className="text-black p-[10px] focus:outline-none focus:shadow-outline rounded-[5px]">
              <option disabled value="">
                Select
              </option>
              <option value="18-20">18-20</option>
              <option value="21-30">21-30</option>
              <option value="40 and above">40+</option>
            </select>
          </div>
          <div className="flex flex-col gap-[5px]">
            Chrildren (0-17)
            <select className="text-black p-[10px] focus:outline-none focus:shadow-outline rounded-[5px]">
              <option disabled value="">
                Select
              </option>
              <option value="0-5">0-5</option>
              <option value="6-10">6-10</option>
              <option value="11-15">11-15</option>
              <option value="16-17">16-17</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between mb-[0px]">
          <div className="bg-[#FBD007] p-[10px] text-[18px] xl:text-[25px] lg:text-[25px] sm:text-[20px] font-[600] text-[#0E385C] flex justify-center items-center px-[50px] rounded-[5px]">
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
      <div className="bg-white leading-[30.26px] w-full text-[18px] xl:text-[25px] lg:text-[25px] sm:text-[20px] p-[30px] border drop-shadow-xl border-b border-b-white shadow-[0px_4px_10px_#00000026] text-[#0E385C] gap-[30px] grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2">
        <div className="flex justify-center items-center">
          <div
            className={`book1 p-[10px] rounded-[5px] cursor-pointer ${
              activeBook === "book1" ? "active2" : ""
            }`}
            onClick={() => handleBookClick("book1")}
          >
            <p className="font-[600]">BOOK AND TRAVEL</p>
            <p className="font-[500]">WITH EASE</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className={`book2 p-[10px] rounded-[5px] cursor-pointer ${
              activeBook === "book2" ? "active2" : ""
            }`}
            onClick={() => handleBookClick("book2")}
          >
            <p className="font-[600]">FAST & QUICK</p>
            <p className="font-[500]">PICKUP SERVICE</p>
          </div>
        </div>
        <div className="flex justify-center  items-center">
          <p
            className={`book3 p-[10px] rounded-[5px] cursor-pointer font-[600] ${
              activeBook === "book3" ? "active2" : ""
            }`}
            onClick={() => handleBookClick("book3")}
          >
            BOOK TICKET{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
