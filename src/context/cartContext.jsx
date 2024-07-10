import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [total,setTotal]=useState(0);

  useEffect(()=>{
    const total = cart.reduce((acc,current)=>{return (acc+current.price*current.amount)},0)
    setTotal(total)
  },[cart])

  useEffect(()=>{
    if(cart){
    const amount = cart.reduce((acc,current)=>{return acc+current.amount},0)
    setAmount(amount)}
  },[cart])

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
  const clearCart = ()=>{
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ addToCart, cart, handleRemove, handleIncrease, handleDecrease,clearCart,amount,total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
