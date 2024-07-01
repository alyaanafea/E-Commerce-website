import React, { useContext } from "react";
import { productContext } from "../context/productContext";
import Product from "../components/Product";

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
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-16 mx-8 md:mx-16 lg:mx-40 my-10 ">
      {filterdProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Home;
