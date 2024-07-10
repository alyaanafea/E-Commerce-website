import React, { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { amount } = useContext(CartContext);
  return (
    <header className="fixed flex items-center bg-white  border-b-2 justify-between p-3  z-[20] w-full ">
      <Link to={"/"}>
        <img src="src\assets\images\logo.svg" alt="" className="w-8 " />
      </Link>
      <div
        className="px-3 font-bold cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-center">
          <BsBag className="relative text-2xl font-bold " />
          <div className="flex justify-center items-center  absolute top-[30px] bg-red-500 text-white text-xs z-[10] px-1 font-thin right-[21px] rounded-full">
            {amount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
