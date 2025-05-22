import React, { useContext } from "react";
import { BsEye, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";


const Product = ({ product }) => {
  const {addToCart}=useContext(CartContext)
 
  return (
    <div className="relative flex flex-col overflow-hidden group">
      <div className="flex items-center justify-center border border-gray-100 h-60">
        <img
          className="transition duration-300 w-28 group-hover:scale-110"
          src={product.image}
          alt=""
        />
      </div>
      <div className="absolute top-0 p-1 transition-all duration-300 bg-white opacity-0 -right-5 group-hover:right-0 group-hover:opacity-100">
        <button className="p-2 font-semibold text-white bg-red-500 hover:bg-red-300" onClick={()=>{addToCart(product)}}>
          <BsPlus />
        </button>
        <Link to={`product/${product.id}`}>
          <div className="p-2 bg-white drop-shadow-md">
            <BsEye />
          </div>
        </Link>
      </div>
      <div className="my-4 ">
        <h4 className="text-sm text-gray-500">{product.category}</h4>
        <Link to={`product/${product.id}`}>
          <h2 className="text-l hover:text-slate-600 ">{product.title}</h2>
        </Link>
        <h4>{product.price}</h4>
      </div>
    </div>
  );
};

export default Product;
