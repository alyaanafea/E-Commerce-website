import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(productContext);
  console.log(products);
  const filterdProducts = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });
  return (
   <div > <Hero/>
    <div className="grid gap-16 mx-8 mt-20 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:mx-16 lg:mx-40 ">
      {filterdProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div></div>
  );
};

export default Home;
