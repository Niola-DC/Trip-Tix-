import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

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
          <div className="modal-content">
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
              className="px-5 py-2 flex Login justify-center font-[500] leading-[29.05px] items-center gap-2 rounded-[10px] text-white bg-transparent border border-white text-[24px] tracking-wide"
            >
              Sign in
              <IoPersonSharp />
            </Link>
          </div>
          <button onClick={onClose}>Close</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DashboardModal;
