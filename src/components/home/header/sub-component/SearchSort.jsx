import React, { useState } from "react";
import axios from "axios";
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
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [trips, setTrips] = useState([]);

  const handleElementClick = (element) => {
    setActiveElement(element);
  };

  const handleBookClick = (element) => {
    setActiveBook(element);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `http://trip-tix-production.up.railway.app/trip/search?from=${from}&to=${to}`
      );
      setTrips(response.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  return (
    <div className="flex flex-col overflow-hidden overflow-y-auto text-white rounded-[5px] text-sm tracking-wide">
      <div className="bg-[#0E385C] bg-opacity-[80%] p-[30px] drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
        <div className="flex w-full mb-[20px] gap-[20px]">
          <div className="flex flex-col gap-[5px] sm:gap-[10px]">
            <p>Your choice</p>
            <div className="grid grid-cols-3 gap-[10px] sm:gap-[15px]">
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
          <div className="flex flex-col gap-[6px] w-[30%]">
            Trip
            <select className="text-black p-[12px] focus:outline-none focus:shadow-outline rounded-[5px]">
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
                value={from}
                onChange={(e) => setFrom(e.target.value)}
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
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[20px] mb-[20px]">
          <div className="flex flex-col gap-[5px]">
            <p>Departs</p>
            <div className="flex bg-white rounded-[5px] items-center">
              <div className="p-[10px] pr-[0px] text-[#2C2D2E] text-opacity-[61%]">
                <FaCalendarAlt />
              </div>
              <input
                type="date"
                placeholder="mm/dd/yyyy"
                className="w-full rounded-[5px] focus:outline-none custom-date-input text-black focus:shadow-outline p-[10px]"
                value={date}
                onChange={handleDateChange}
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
                type="date"
                placeholder="mm/dd/yyyy"
                className="w-full custom-date-input rounded-[5px] focus:outline-none text-black focus:shadow-outline p-[10px]"
                value={returnDate}
                onChange={handleReturnDateChange}
              />
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row gap-[10px] flex-col w-full justify-between mb-[0px]">
          <div
            className="bg-[#FBD007] p-[10px] text-[18px] xl:text-[25px] lg:text-[25px] sm:text-[20px] font-[600] text-[#0E385C] cursor-pointer flex justify-center items-center px-[50px] rounded-[5px]"
            onClick={handleSubmit}
          >
            SEARCH
          </div>
          <div>
            <select className="text-white p-[10px] bg-transparent border-hidden focus:outline-none focus:shadow-outline rounded-[5px]">
              <option value="">Advance Options</option>
              <option value="">Travel Duration</option>
              <option value="">Departure Time</option>
              <option value="">Arrival Time</option>
              <option value="">Bus Type</option>
              <option value="">Price Range</option>
              <option value="">Bus Rating</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white leading-[30.26px] w-full text-[18px] xl:text-[25px] lg:text-[25px] sm:text-[20px] p-[30px] border drop-shadow-xl border-b border-b-white shadow-[0px_4px_10px_#00000026] text-[#0E385C] gap-[30px] grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2">
        {trips.map((trip) => (
          <div key={trip.id} className="flex flex-col justify-center items-center p-[10px]">
            <p className="font-[600]">{trip.from} to {trip.to}</p>
            <p className="font-[500]">Departs: {trip.departs}</p>
            <p className="font-[500]">Returns: {trip.returns}</p>
          </div>
        ))}
      </div> 
    </div>
  );
}
