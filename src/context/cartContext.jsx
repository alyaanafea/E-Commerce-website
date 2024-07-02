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
  // console.log(cart);
  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  const handleIncrease = (product) => {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        return (item = { ...item, amount: item.amount + 1 });
      }
      return item;
    });
    setCart(newCart);
  };
  const handleDecrease = (product) => {
    const newCart = cart
      .map((item) => {
        if (item.id === product.id) {
          if (item.amount > 1) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cart, handleRemove, handleIncrease, handleDecrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
