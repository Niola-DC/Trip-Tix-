import Logo from "../../../../helper/logo";
import Links from "./navlinks/Links";

export default function Navlinks() {
  return (
    <div className="flex items-center bg-[#0E385C] px-[40px] bg-opacity-[50%] absolute top-0 w-full left-0 p-[15px] justify-between">
      <Logo />
      <Links />
    </div>
  );
}
