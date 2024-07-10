import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import { CartContext } from "../context/cartContext";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { products } = useContext(productContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  console.log(product);
  console.log(id);
  if(!product){return <div className="flex items-center justify-center w-full h-screen ">
    loading
  </div>}
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen md:flex-row gap-9">
      <div>
        <img
          className="max-w-[200px] lg:max-w-[300px] "
          src={product.image}
          alt=""
        />
      </div>
      <div className="max-w-[500px] flex flex-col justify-center items-center md:items-start gap-5">
        {" "}
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <h4 className="text-red-500">{product.price} $</h4>
        <h2>{product.description}</h2>
        <div className="px-8 py-3 mt-3 text-white bg-black cursor-pointer" onClick={()=>{addToCart(product)}}>Add To Cart</div>
      </div>
    </div>
  );
}

export default ProductDetails;
