import Navlinks from "./sub-component/Navlinks";
import SearchSort from "./sub-component/SearchSort";

export default function Header() {
  return (
    <header className="w-full h-[85dvh] bg-red-400 bus  py-8 px-12 relative">
      <Navlinks />
      <div className="absolute top-[30%] w-[90%] left-[50%] -translate-x-[50%] -translate-y-[-0%]">
        <SearchSort />
      </div>
    </header>
  );
}
