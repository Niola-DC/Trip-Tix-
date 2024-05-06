import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import DashboardModal from "../../DashboardModal";

const Menu = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsSuccessModalOpen(!isSuccessModalOpen);
  };

  return (
    <div>
      <DashboardModal isOpen={isSuccessModalOpen} onClose={handleToggleModal} />
      <div
        onClick={handleToggleModal}
        className="flex justify-center menu p-[10px] rounded-[5px] bg-[#FBD007] text-[#0E385C] items-center"
      >
        <FiMenu size={"2rem"} />
      </div>
    </div>
  );
};

export default Menu;
