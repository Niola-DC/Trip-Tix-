import React, { useState } from 'react'

export default function Links() {
   const [activeLink, setActiveLink] = useState("Home");

   const handleClick = (link) => {
     setActiveLink(link);
   };

  return (
    <div className="flex items-center font-[400] leading-[29.05px] gap-12 px-14 py-3 text-white rounded-[2rem] text-sm tracking-wide backdrop-blur-md">
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
    </div>
  );
}
