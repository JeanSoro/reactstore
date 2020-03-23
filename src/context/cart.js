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


  return (
    <CartContext.Provider value={{ cart, total, cartItems }}>
      {children}
    </CartContext.Provider>
  )

}

export default CartProvider;