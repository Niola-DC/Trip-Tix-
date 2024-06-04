import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { IoRemoveOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import Logo from "../../helper/logo";

const Footer = () => {
  return (
    <div className="flex flex-col w-full  h-auto">
      <div className="grid grid-cols-1 w-full xl:grid-cols-2 lg:grid-cols-2 gap-[20px] text-left bg-[#0B142F] p-[20px] sm:p-[30px] lg:p-[50px] xl:p-[50px] text-white">
        <div className="flex flex-col gap-[20px] w-[80%] ">
          <Logo />
          <p className="font-[400] text-[14px] inline-block leading-[16.94px]">
            Our goal is to provide a smooth and hassle-free booking experience,
            ensuring that you can focus on enjoying your journey. With TripTix, you can expect convenience, reliability, and
            exceptional customer service
          </p>
          <hr />
          <div className="grid grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-[30px]">
            <div className="border flex justify-center items-center py-[20px] rounded-[5px] border-white">
              <FaFacebook size={"1.5rem"} />
            </div>
            <div className="border flex justify-center items-center py-[20px] rounded-[5px] border-white">
              <FaInstagram size={"1.5rem"} />
            </div>
            <div className="border flex justify-center items-center py-[20px] rounded-[5px] border-white">
              <FaWhatsapp size={"1.5rem"} />
            </div>
            <div className="border flex justify-center items-center py-[20px] rounded-[5px] border-white">
              <FaTelegram size={"1.5rem"} />
            </div>
            <div className="border flex justify-center items-center py-[20px] rounded-[5px] border-white">
              <FaXTwitter size={"1.5rem"} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <div className="grid w-full justify-center items-center gap-[20px] mb-[30px] grid-cols-1 xl:grid-cols-2">
            <div className="flex w-[100%] gap-[10px]">
              <div className="bg-[#E1EBFF] rounded-[5px] h-[50px] px-[15px] text-[#0B142F] flex justify-center items-center border">
                <MdOutlineEmail size={"1.5rem"} />
              </div>
              <div className="flex h-[50px] flex-col gap-2">
                <p className="font-[600] text-[24px] leading-[20px]">
                  Enter your Email
                </p>
                <p className="font-[400] text-[13px] text-[#EDEDED] leading-[20px]">
                  Our Colleagues Will Contact You Soon
                </p>
              </div>
            </div>
            <form action="#">
              <div className="flex gap-[5px] sm:gap-[10px] h-[50px]">
                <input
                  type="text"
                  placeholder="Enter Email *"
                  className="border rounded-[5px] w-full border-white bg-transparent text-white p-[10px] focus:outline-none focus:shadow-outline"
                />
                <button
                  className="bg-[#E1EBFF] flex justify-center items-center rounded-[5px] text-[#0B142F] p-[20px]"
                  type="submit"
                >
                  <BsArrowRightShort size={"1.5rem"} />
                </button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-[70px]">
            <div>
              <div className="flex justify-center items-center mb-[20px] text-white gap-[5px]">
                <IoRemoveOutline size={"1.5rem"} />
                <p className="font-[600] text-[18px] leading-[20px]">
                  Popular Route
                </p>
              </div>
              <div className="font-[400] text-[#F5F5F5] flex flex-col gap-[20px] text-[14px] leading-[20px]">
                <div className="flex items-center gap-[5px]">
                  <RiArrowRightSLine size={"1.5rem"} />
                  <p className="cursor-pointer">Lagos</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <RiArrowRightSLine size={"1.5rem"} />
                  <p className="cursor-pointer">Ogun</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <RiArrowRightSLine size={"1.5rem"} />
                  <p className="cursor-pointer">Edo</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <RiArrowRightSLine size={"1.5rem"} />
                  <p className="cursor-pointer">Enugu</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <RiArrowRightSLine size={"1.5rem"} />
                  <p className="cursor-pointer">Accra</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mb-[20px] text-white gap-[5px]">
                <IoRemoveOutline size={"1.5rem"} />
                <p className="font-[600] text-[18px] leading-[20px]">
                  Useful Links
                </p>
              </div>
              <div className="font-[400] flex flex-col gap-[20px] text-[14px] leading-[20px]">
                <Link to={"/"} className="flex items-center gap-[5px]">
                  <RiArrowRightSLine size={"1.5rem"} />
                  <p className="cursor-pointer">Home</p>
                </Link>
                <Link to={"/aboutus"} className="flex items-center gap-[5px]">
                  <RiArrowRightSLine size={"1.5rem"} />
                  <p className="cursor-pointer">About</p>
                </Link>
                <Link to={"/booking"} className="flex items-center gap-[5px]">
                  <RiArrowRightSLine size={"1.5rem"} />
                  <p className="cursor-pointer">Booking</p>
                </Link>
                <div className="flex items-center gap-[5px]">
                  <RiArrowRightSLine size={"1.5rem"} />
                  <p className="cursor-pointer">Book</p>
                </div>
                <Link to={"/faq"} className="flex items-center gap-[5px]">
                  <RiArrowRightSLine size={"1.5rem"} />
                  <p className="cursor-pointer">FAQ</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center mb-[20px] text-white gap-[5px]">
                <IoRemoveOutline size={"1.5rem"} />
                <p className="font-[600] text-[18px] leading-[20px]">
                  Contact Us
                </p>
              </div>
              <div className="font-[400] w-full text-[#EDEDED] flex flex-col gap-[20px] text-[14px] leading-[20px]">
                <div className="flex items-center text-[#F5F5F5] gap-[10px] font-[500]">
                  <FaCircle />
                  <p>Lagos Address</p>
                </div>
                <div className="border-l flex justify-center items-center p-[10px] border-l-white">
                  <p className="cursor-pointer inline-block">
                    Churchill Executive Tower, Business Bay, Dubai, UAE P.O.Box:
                    28824 Dubai.UAE
                  </p>
                </div>
                <div className="flex items-center text-[#F5F5F5] gap-[10px] font-[500]">
                  <FaCircle />
                  <p>Abuja Address</p>
                </div>
                <div className="border-l flex w-full justify-center items-center md:p-[8px] border-l-white">
                  <p className="cursor-pointer flex justify-center items-center w-full pl-[9px]">
                    University neighborhood, Civan Alley, No:1, Allure tower,
                    unit:384 Avcilar/Istanbul
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B142F] w-full flex flex-col gap-[20px] sm:px-[50px] pb-[50px] text-white">
        <div className="flex justify-center items-center gap-2 text-[#757575] w-full p-[10px]">
          <hr className="w-[33%]" />
          <p className="font-[400] text-[14px] leading-[16.94px]">
            &copy; 2024 | All Rights Reserved | Powered by Team Festac
          </p>
          <hr className="w-[33%]" />
        </div>
        <div className="flex justify-center items-center">

        <Logo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
