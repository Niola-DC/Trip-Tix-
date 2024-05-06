import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";

export default function SubLinks() {
  return (
    <Link
      to={"/login"}
      className="px-5 py-2 flex Login justify-center font-[500] leading-[29.05px] items-center gap-2 rounded-[10px] text-white bg-transparent border border-white text-[24px] tracking-wide"
    >
      Sign in
      <IoPersonSharp />
    </Link>

  );
}
