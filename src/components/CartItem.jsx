import React, { useContext } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const CartItem = ({ item }) => {
  const { handleRemove, handleIncrease,handleDecrease } = useContext(CartContext);
  return (
    <div className="flex items-center w-[95%] gap-5 p-3 mx-5 border-t-2">
      <div className="">
        <Link to={`/product/${item.id}`}>
          <img className="max-w-[50px]" src={item.image} alt="" />
        </Link>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <Link to={`/product/${item.id}`}>
            <div>{item.title}</div>
          </Link>
          <MdClose
            className="text-xl text-gray-500 cursor-pointer hover:text-red-500 "
            onClick={() => handleRemove(item.id)}
          />
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center justify-center gap-4 px-2 py-1 text-sm border-2 border-gray-200">
            <BiMinus className="cursor-pointer " onClick={()=>{handleDecrease(item)}}/>
            <div>{item.amount}</div>
            <BiPlus className="cursor-pointer" onClick={()=>{handleIncrease(item)}}/>
          </div>
          <div className="flex items-center justify-center">{item.price} $</div>
          <div className="flex items-center justify-center">
            {item.price * item.amount} $
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
