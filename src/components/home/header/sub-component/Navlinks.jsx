import Logo from "../../../../helper/logo";
import Links from "./navlinks/Links";

export default function Navlinks({ handleToggleModal }) {
  return (
    <div className="flex z-[2] items-center bg-[#0E385C] px-[40px] bg-opacity-[50%] absolute top-0 w-full left-0 p-[15px] justify-between">
      <Logo />
      <Links handleToggleModal={handleToggleModal} />
    </div>
  );
}
