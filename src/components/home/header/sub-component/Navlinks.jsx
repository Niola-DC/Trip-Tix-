import Logo from "../../../../helper/logo";
import Links from "./navlinks/Links";
import SubLinks from "./navlinks/SubLinks";

export default function Navlinks() {
  return (
    <div className="flex items-center bg-[#0E385C] px-[40px] bg-opacity-[50%] absolute top-0 w-full left-0 p-[10px] justify-between">
      <Logo />
      <Links />
      <SubLinks />
    </div>
  );
}
