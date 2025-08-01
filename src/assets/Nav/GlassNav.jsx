import { LayoutGrid, Menu, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../components/SearchIcon/SearchIcon";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function GlassmorphNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const searchActivate = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-500 fixed h-[53px] left-1/2 top-0 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col items-center rounded-full bg-background/20 p-3 backdrop-blur-lg md:rounded-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl text-white align-center"> A3THER</h1>

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
          <AlignLeft />
        </div>
      </div>
    </nav>
  );
}
