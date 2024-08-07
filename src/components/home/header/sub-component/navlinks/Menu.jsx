import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import DashboardModal from "../../DashboardModal";
import GetStartedModal from "../GetStartedModal";

const Menu = () => {
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDashboardModalOpen) {
        setIsDashboardModalOpen(false);
      }
    };

    if (isDashboardModalOpen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDashboardModalOpen]);

  const handleToggleDashboardModal = () => {
    setIsDashboardModalOpen(!isDashboardModalOpen);
  };

  const handleShowGetStartedModal = () => {
    setIsDashboardModalOpen(false); // Close the DashboardModal
    setIsGetStartedModalOpen(true);
  };

  const handleCloseGetStartedModal = () => {
    setIsGetStartedModalOpen(false);
  };

  return (
    <div>
      <DashboardModal
        isOpen={isDashboardModalOpen}
        onClose={handleToggleDashboardModal}
        onSignUpClick={handleShowGetStartedModal} // Pass the handler as a prop
      />
      <div
        onClick={handleToggleDashboardModal}
        className="flex justify-center cursor-pointer menu p-[10px] rounded-[5px] bg-[#FBD007] text-[#0E385C] items-center"
      >
        <FiMenu size={"2rem"} />
      </div>
      <GetStartedModal
        isOpen={isGetStartedModalOpen}
        onClose={handleCloseGetStartedModal}
      />
    </div>
  );
};

export default Menu;
