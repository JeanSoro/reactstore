// cart context

//***************************** products context

import React, { useState, useEffect, createContext } from 'react';
// import axios from 'axios';
// import url from '../utils/URL'
import localCart from '../utils/localCart';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(localCart);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    //localStorage

    //1----------------- cart items-------------------------
    let newCartItems = cart.reduce((accumulator, current) => {
      return (accumulator += current.amount)
    }, 0)
    setCartItems(newCartItems);

    //2----------------- cart Total----------------------------
    let newCartTotal = cart.reduce((accumulator, current) => {
      return accumulator += (current.amount * current.price);
    }, 0)
    newCartTotal = parseFloat(newCartTotal.toFixed(2));
    setTotal(newCartTotal)

  }, [cart])


  //remove item
  const removeItemFromCart = id => {
    setCart([...cart].filter(cartItem => cartItem.id !== id));

    // let newCart = [...cart].filter(cartItem => cartItem.id !== id);
    // setCart(newCart);
  }
  // **********************************************
  // **********************************************

  //increase item's amount
  const increaseItemAmount = id => {
    const newCart = [...cart].map(cartItem => {
      return cartItem.id === id ? { ...cartItem, amount: cartItem.amount + 1 } : { ...cartItem }
    });
    setCart(newCart);

  }
  // **********************************************
  // **********************************************

  //decrease item's amount
  const decreaseItemAmount = (id, amount) => {

    if (amount === 1) {
      removeItemFromCart(id);
      return;
    }
    else {
      const newCart = [...cart].map(cartItem => {
        return cartItem.id === id ? { ...cartItem, amount: cartItem.amount - 1 } : { ...cartItem }
      });
      setCart(newCart);
    }
  }
  // **********************************************
  // **********************************************

  //add item to cart
  const addItemToCart = product => {

  }
  // **********************************************
  // **********************************************

  //clear entire cart
  const clearCart = () => {

  }


  return (
    <CartContext.Provider value={
      {
        cart, total, cartItems,
        removeItemFromCart, increaseItemAmount,
        decreaseItemAmount, addItemToCart, clearCart
      }
    }>
      {children}
    </CartContext.Provider>
  )

}

export default CartProvider;