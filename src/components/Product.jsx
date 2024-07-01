import React, { useContext } from "react";
import { BsEye, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";


const Product = ({ product }) => {
  const {addToCart,cart,setCart}=useContext(CartContext)
 
  return (
    <div className="flex flex-col relative group overflow-hidden">
      <div className="h-60 flex justify-center items-center border border-gray-100">
        <img
          className="w-28 group-hover:scale-110 transition duration-300"
          src={product.image}
          alt=""
        />
      </div>
      <div className="absolute -right-5 top-0 bg-white opacity-0 group-hover:right-0 group-hover:opacity-100 transition-all duration-300 p-1">
        <button className="p-2 bg-red-500 hover:bg-red-300" onClick={()=>{addToCart(product)}}>
          <BsPlus />
        </button>
        <Link to={`product/${product.id}`}>
          <div className="p-2  bg-white drop-shadow-md">
            <BsEye />
          </div>
        </Link>
      </div>
      <div className="my-4 ">
        <h4 className="text-gray-500 text-sm">{product.category}</h4>
        <Link to={`product/${product.id}`}>
          <h2 className="text-l hover:text-slate-600 ">{product.title}</h2>
        </Link>
        <h4>{product.price}</h4>
      </div>
    </div>
  );
};

export default Product;
