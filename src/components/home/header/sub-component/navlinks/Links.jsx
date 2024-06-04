import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import GetStartedModal from "../GetStartedModal";

export default function Links() {
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleShowModal = () => {
    setShowModal(true); // Always open the Dashboard
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the Dashboard
  };

  return (
    <div className="flex">
      <div className="flex Links items-center font-[400] leading-[29.05px] gap-[10px] py-3 text-white rounded-[2rem] text-sm tracking-wide">
        <NavLink
          to="/"
          className="cursor-pointer text-[24px] p-[10px] focus:border-b-2 focus:border-b-[#FBD007]"
          activeClassName="active" // Apply 'active' class when link is active
          onClick={() => setActiveLink("home")} // Set active link state
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutus"
          className="cursor-pointer text-[24px] p-[10px] focus:border-b-2 focus:border-b-[#FBD007]"
          activeClassName="active"
          onClick={() => setActiveLink("aboutus")}
        >
          About
        </NavLink>
        <NavLink
          to="/travel"
          className="cursor-pointer text-[24px] p-[10px] focus:border-b-2 focus:border-b-[#FBD007]"
          activeClassName="active"
          onClick={() => setActiveLink("booking")}
        >
          Booking
        </NavLink>
        <NavLink
          to="/faq"
          className="cursor-pointer text-[24px] p-[10px] focus:border-b-2 focus:border-b-[#FBD007]"
          activeClassName="active"
          onClick={() => setActiveLink("faq")}
        >
          FAQ
        </NavLink>
        <NavLink
          to="/contact"
          className="cursor-pointer text-[24px] p-[10px] focus:border-b-2 focus:border-b-[#FBD007]"
          activeClassName="active"
          onClick={() => setActiveLink("contact")}
        >
          Contact
        </NavLink>

        <div
          onClick={handleShowModal}
          className="px-5 ml-[100px] py-2 flex cursor-pointer Login justify-center font-[500] leading-[29.05px] items-center gap-2 rounded-[10px] text-white bg-transparent border border-white text-[24px] tracking-wide"
        >
          Sign in
          <IoPersonSharp />
        </div>
      </div>
      <Menu />
      <GetStartedModal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
}
