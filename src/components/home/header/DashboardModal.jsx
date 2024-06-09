import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import GetStartedModal from "./sub-component/GetStartedModal";

const DashboardModal = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true); // Open the GetStartedModal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the GetStartedModal
  };

  const handleLinkClick = (link) => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="dashboard-modal open bg-[#0E385C] border-t border-t-white bg-opacity-[70%]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="modal-content flex flex-col">
            <NavLink to="/" className="cursor-pointer text-[24px] p-[10px]" onClick={() => handleLinkClick("home")}>
              Home
            </NavLink>
            <NavLink to="/aboutus" className="cursor-pointer text-[24px] p-[10px]" onClick={() => handleLinkClick("aboutus")}>
              About
            </NavLink>
            <NavLink to="/travel" className="cursor-pointer text-[24px] p-[10px]" onClick={() => handleLinkClick("travel")}>
              Booking
            </NavLink>
            <NavLink to="/faq" className="cursor-pointer text-[24px] p-[10px]" onClick={() => handleLinkClick("faq")}>
              FAQ
            </NavLink>
            <NavLink to="/contact" className="cursor-pointer text-[24px] p-[10px]" onClick={() => handleLinkClick("contact")}>
              Contact
            </NavLink>

            <div onClick={handleShowModal} className="px-5 py-2 flex cursor-pointer Login justify-center font-[500] leading-[29.05px] items-center gap-2 rounded-[10px] text-white bg-transparent border border-white text-[24px] tracking-wide">
              Sign in
              <IoPersonSharp />
            </div>
            <GetStartedModal isOpen={showModal} onClose={handleCloseModal} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DashboardModal;
