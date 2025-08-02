import { LayoutGrid, Menu, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/SearchIcon";
import SearchBar from "../../components/SearchBar/SearchBar";
import Hamburger from "../../assets/icons/hamburger";

export default function GlassmorphNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const searchActivate = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed h-[53px] left-1/2 top-0 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col items-center rounded-full bg-background/20 p-3 backdrop-blur-lg md:rounded-full">
      <div className="flex w-full items-center justify-between">
        {/* hamburger menu  */}
        <div className="mx-3">
          <Hamburger />
        </div>

        {/* TITLE */}
        <div>
          <h1 className="text-xl text-white align-center justify-center">
            A3THER
          </h1>
        </div>

        {/* search bar and Icon */}

        <div className="flex justify-between items-center">
          <div
            className={`${
              isOpen
                ? "w-48 opacity-100 transition-all duration-300 ease-in-out overflow-hidden"
                : "w-0 opacity-0 transition-all duration-300 ease-in-out overflow-hidden"
            }`}
          >
            <SearchBar />
          </div>

          <div
            className="mx-2 flex items-center justify-center hover:shadow-xl hover:shadow-white rounded-full hover:cursor-pointer"
            onClick={searchActivate}
          >
            <SearchIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
