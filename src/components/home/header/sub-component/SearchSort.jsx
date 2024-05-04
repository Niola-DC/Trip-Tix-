import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

export default function SearchSort() {
  return (
    <div className="inline-block px-14 py-3 text-white rounded-[2rem] text-sm tracking-wide bg-white/10 backdrop-blur-md">
      <div className="">
        <IoCalendarOutline />
        <input type="date" name="date" id="" />
      </div>
      <div className="">
        <IoCalendarOutline />
        <select>
          <option value="">Select</option>
          <option value="">Hello</option>
          <option value="">Hello</option>
          <option value="">Hello</option>
          <option value="">Hello</option>
          <option value="">Hello</option>
          <option value="">Hello</option>
        </select>
      </div>
      <div className="">
        <CiLocationOn />
        <select>
          <option value="">Select</option>
          <option value="">Hello</option>
        </select>
      </div>
    </div>
  );
}
