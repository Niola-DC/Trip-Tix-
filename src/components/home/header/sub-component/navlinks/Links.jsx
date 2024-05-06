import React, { useState } from 'react'
import { IoPersonSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default function Links() {
   const [activeLink, setActiveLink] = useState("Home");

   const handleClick = (link) => {
     setActiveLink(link);
   };

  return (
    <div className="flex">
      <div className="flex Links items-center font-[400] leading-[29.05px] gap-[10px]  py-3 text-white rounded-[2rem] text-sm tracking-wide">
        <p
          className={`cursor-pointer text-[24px] p-[10px] ${
            activeLink === "Home" ? "border-b-2 border-b-[#FBD007]" : ""
          }`}
          onClick={() => handleClick("Home")}
        >
          Home
        </p>
        <p
          className={`cursor-pointer text-[24px] p-[10px] ${
            activeLink === "About" ? "border-b-2 border-b-[#FBD007]" : ""
          }`}
          onClick={() => handleClick("About")}
        >
          About
        </p>
        <p
          className={`cursor-pointer text-[24px] p-[10px] ${
            activeLink === "Travel" ? "border-b-2 border-b-[#FBD007]" : ""
          }`}
          onClick={() => handleClick("Travel")}
        >
          Travel
        </p>
        <p
          className={`cursor-pointer text-[24px] p-[10px] ${
            activeLink === "FAQs" ? "border-b-2 border-b-[#FBD007]" : ""
          }`}
          onClick={() => handleClick("FAQs")}
        >
          FAQs
        </p>
        <p
          className={`cursor-pointer text-[24px] p-[10px] ${
            activeLink === "Contact" ? "border-b-2 border-b-[#FBD007]" : ""
          }`}
          onClick={() => handleClick("Contact")}
        >
          Contact
        </p>
        <Link
          to={"/login"}
          className="px-5 ml-[100px] py-2 flex Login justify-center font-[500] leading-[29.05px] items-center gap-2 rounded-[10px] text-white bg-transparent border border-white text-[24px] tracking-wide"
        >
          Sign in
          <IoPersonSharp />
        </Link>
      </div>
      <Menu />
    </div>
  );
}
