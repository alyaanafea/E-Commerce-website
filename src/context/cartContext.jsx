import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === product.id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return (item = { ...item, amount: cartItem.amount + 1 });
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  console.log(cart);
  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
