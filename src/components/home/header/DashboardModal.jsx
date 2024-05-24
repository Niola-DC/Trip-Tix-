import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoPersonSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const DashboardModal = ({ isOpen, onClose }) => {
     const [activeLink, setActiveLink] = useState("Home");

     const handleClick = (link) => {
       setActiveLink(link);
     };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="dashboard-modal open bg-[#0E385C] border-t border-t-white bg-opacity-[70%] "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="modal-content flex flex-col">
            <NavLink
              exact
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
              onClick={() => setActiveLink("about")}
            >
              About
            </NavLink>
            <NavLink
              to="/travel"
              className="cursor-pointer text-[24px] p-[10px] focus:border-b-2 focus:border-b-[#FBD007]"
              activeClassName="active"
              onClick={() => setActiveLink("travel")}
            >
              Booking
            </NavLink>
            <NavLink
              to="/faq"
              className="cursor-pointer text-[24px] p-[10px] focus:border-b-2 focus:border-b-[#FBD007]"
              activeClassName="active"
              onClick={() => setActiveLink("faqs")}
            >
              FAQs
            </NavLink>
            <NavLink
              to="/contact"
              className="cursor-pointer text-[24px] p-[10px] focus:border-b-2 focus:border-b-[#FBD007]"
              activeClassName="active"
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className="px-5 ml-[100px] py-2 flex Login justify-center font-[500] leading-[29.05px] items-center gap-2 rounded-[10px] text-white bg-transparent border border-white text-[24px] tracking-wide"
              activeClassName="active"
              onClick={() => setActiveLink("login")}
            >
              Sign in
              <IoPersonSharp />
            </NavLink>
          </div>
          <button onClick={onClose}>Close</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DashboardModal;
