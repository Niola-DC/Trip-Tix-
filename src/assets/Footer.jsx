import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [activeLanguage, setActiveLanguage] = useState("English");

  const handleClick = (language) => {
    setActiveLanguage(language);
  };

  return (
    <div className="flex flex-col w-full h-auto">
      <div className="grid grid-cols-1 w-full xl:grid-cols-2 lg:grid-cols-2 gap-[70px] text-left bg-[#1E1E1E]  p-[50px] text-white">
        <div className="flex flex-col gap-[20px] w-[100%]">
          <p className="font-[600] text-[20px] leading-[24.2px] mb-[20px]">
            Short Brief About Us
          </p>
          <p className="font-[400] text-[14px] inline-block leading-[16.94px]">
            Lorem ipsum dolor sit amet consectetur. Bibendum consequat laoreet
            turpis in pellentesque sem id ut. Feugiat quam porttitor in augue
            sed quis pellentesque quam purus. Ac euismod ac proin vitae
            vulputate. Urna facilisis varius vestibulum at gravida turpis.
            Viverra imperdiet convallis elementum sed mauris. Ultricies in morbi
            eu felis nibh tellus.
          </p>
          <form action="#">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-white bg-transparent text-white p-[10px] focus:outline-none focus:shadow-outline"
              />
              <button className="bg-[#0E385C] p-[10px]" type="submit">
                Subscribe Now
              </button>
            </div>
          </form>
          <div className="flex gap-[10px]">
            <FaFacebook />
            <RiInstagramFill />
            <FaLinkedin />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full xl:grid-cols-3 lg:grid-cols-2 gap-[70px]">
          <div>
            <p className="font-[600] text-[20px] leading-[24.2px] mb-[20px]">
              Website Links
            </p>
            <div className="font-[400] flex flex-col gap-[20px] text-[14px] leading-[16.94px]">
              <p className="cursor-pointer">Home</p>
              <p className="cursor-pointer">About</p>
              <p className="cursor-pointer">Travel</p>
              <p className="cursor-pointer">FAQs</p>
            </div>
          </div>
          <div>
            <p className="font-[600] text-[20px] leading-[24.2px] mb-[20px]">
              Services
            </p>
            <div className="font-[400] flex flex-col gap-[20px] text-[14px] leading-[16.94px]">
              <p className="cursor-pointer">Architecture</p>
              <p className="cursor-pointer">Buildings</p>
              <p className="cursor-pointer">3d maps</p>
              <p className="cursor-pointer">Structure designs</p>
            </div>
          </div>
          <div>
            <p className="font-[600] text-[20px] leading-[24.2px] mb-[20px]">
              Developers
            </p>
            <div className="font-[400] flex flex-col gap-[20px] text-[14px] leading-[16.94px]">
              <p className="cursor-pointer">Features</p>
              <p className="cursor-pointer">Testimonials</p>
              <p className="cursor-pointer">Referals</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full flex flex-col gap-[20px] p-[50px] text-white">
        <div className="flex justify-end gap-5 font-[400] text-[14px] leading-[16.94px]">
          <p
            className={`cursor-pointer p-[10px] ${
              activeLanguage === "English" ? "bg-[#0E385C]" : ""
            }`}
            onClick={() => handleClick("English")}
          >
            English
          </p>
          <p
            className={`cursor-pointer p-[10px] ${
              activeLanguage === "Arabic" ? "bg-[#0E385C]" : ""
            }`}
            onClick={() => handleClick("Arabic")}
          >
            Arabic
          </p>
          <p
            className={`cursor-pointer p-[10px] ${
              activeLanguage === "French" ? "bg-[#0E385C]" : ""
            }`}
            onClick={() => handleClick("French")}
          >
            French
          </p>
        </div>
        <div className="flex justify-center items-center border-t p-[10px] border-t-white">
          <p className="font-[400] text-[14px] leading-[16.94px]">
            2024 &copy; CopyRight Team Festac
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
