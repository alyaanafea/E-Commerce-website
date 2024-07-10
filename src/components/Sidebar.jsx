import React, { useContext } from "react";
import { SidebarContext } from "../context/sidebarContext";
import CartItem from "./CartItem";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../context/cartContext";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { cart, clearCart, amount, total } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full p-5 md:w-[30vw] xl:w-[30vw] fixed h-full top-0 shadow-lg transition-all duration-300 z-[99] bg-white `}
    >
      <div className="flex items-center justify-between p-4 mx-5 ">
        <div className="text-2lg">Shopping Bag ({amount})</div>
        <div className="cursor-pointer" onClick={() => handleClose()}>
          <IoMdArrowForward className="text-2lg " />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-5 mt-2 overflow-x-hidden overflow-y-auto h-[450px]">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex items-center justify-between pt-4 m-5 border-t-2 ">
        <h4>Total : {total.toFixed(2)} $</h4>
        <BsTrash className="text-red-500" onClick={() => clearCart()} />
      </div>
      <Link to={"/"}className="flex items-center justify-center w-full p-4 my-6 text-white bg-black ">Checkout</Link>
    </div>
  );
};

export default Sidebar;
