import React, { useContext } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const CartItem = ({ item }) => {
  const { handleRemove, handleIncrease,handleDecrease } = useContext(CartContext);
  return (
    <div className="flex gap-5 items-center p-3 w-full">
      <div className="">
        <Link to={`/product/${item.id}`}>
          <img className="max-w-[50px]" src={item.image} alt="" />
        </Link>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center  w-full">
          <Link to={`/product/${item.id}`}>
            <div>{item.title}</div>
          </Link>
          <MdClose
            className="text-gray-500 hover:text-red-500 text-xl cursor-pointer "
            onClick={() => handleRemove(item.id)}
          />
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex gap-4 justify-center items-center py-1 px-2  border-2 border-gray-200 text-sm">
            <BiMinus className="cursor-pointer " onClick={()=>{handleDecrease(item)}}/>
            <div>{item.amount}</div>
            <BiPlus className="cursor-pointer" onClick={()=>{handleIncrease(item)}}/>
          </div>
          <div className="flex justify-center items-center">{item.price} $</div>
          <div className="flex justify-center items-center">
            {item.price * item.amount} $
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
