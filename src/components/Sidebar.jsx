import React, { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";
import CartItem from "./CartItem"
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../context/cartContext";

const Sidebar = () => {
  const { cart } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full md:w-[30vw] xl:w-[30vw] fixed h-full top-0 shadow-lg transition-all duration-300 z-10 bg-white`}
    >
      <div className="flex justify-between items-center p-8 border-b">
        
        <div className="text-2lg">Shopping Bag (0)</div>
        <div className="cursor-pointer" onClick={() => handleClose()}>
          <IoMdArrowForward className="text-2lg " />
        </div>
      </div>
      <div>
        {cart.map((item)=>{return <CartItem item={item} key={item.id}/>})}
      </div>
    </div>
  );
};

export default Sidebar;
