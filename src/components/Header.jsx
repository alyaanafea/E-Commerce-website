import React, { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="bg-pink-100 p-4 flex justify-between items-center">
      <div>logo</div>
      <div
        className="px-3 cursor-pointer font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsBag className="text-2xl font-bold" />
      </div>
    </header>
  );
};

export default Header;
