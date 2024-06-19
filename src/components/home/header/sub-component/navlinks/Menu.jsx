import React from "react";
import { FiMenu } from "react-icons/fi";

const Menu = ({ handleToggleModal }) => {
  return (
    <div>
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
