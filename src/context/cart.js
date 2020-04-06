// cart context

//***************************** products context

import React, { useState, useEffect, createContext, useReducer } from 'react';
import localCart from '../utils/localCart';
import reducer from './reducer';
import { CartActionTypes } from './actions';

let getCartFromLocalStorage = () => {
  return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}




export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, dispatch] = useReducer(reducer, getCartFromLocalStorage());
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    //localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    //1----------------- Number of cart items-------------------------
    let newCartItems = cart.reduce((accumulator, current) => {
      return (accumulator += current.amount)
    }, 0)
    setCartItems(newCartItems);

    //2----------------- cart Total Price for all Items----------------------------
    let newCartTotal = cart.reduce((accumulator, current) => {
      return accumulator += (current.amount * current.price);
    }, 0)
    newCartTotal = parseFloat(newCartTotal.toFixed(2));
    setTotal(newCartTotal)

  }, [cart])


  //remove item
  const removeItemFromCart = id => {

    dispatch({
      type: CartActionTypes.REMOVE,
      payload: id
    })

    // setCart([...cart].filter(cartItem => cartItem.id !== id));

    // let newCart = [...cart].filter(cartItem => cartItem.id !== id);
    // setCart(newCart);
  }
  // **********************************************
  // **********************************************

  //increase item's amount
  const increaseItemAmount = id => {

    dispatch({
      type: CartActionTypes.INCREASE,
      payload: id
    })
    // const newCart = [...cart].map(cartItem => {
    //   return cartItem.id === id ? { ...cartItem, amount: cartItem.amount + 1 } : { ...cartItem }
    // });
    // setCart(newCart);

  }
  // **********************************************
  // **********************************************

  //decrease item's amount
  const decreaseItemAmount = (id, amount) => {

    if (amount === 1) {
      dispatch({
        type: CartActionTypes.REMOVE,
        payload: id
      })
      return
    }
    else {
      dispatch({
        type: CartActionTypes.DECREASE,
        payload: id
      })

      // setCart(newCart);
    }
  }
  // **********************************************
  // **********************************************

  //add item to cart
  const addItemToCart = product => {
    let item = [...cart].find(cartItem => cartItem.id === product.id);

    if (item) {
      dispatch({
        type: CartActionTypes.INCREASE,
        payload: product.id
      })
    } else {

      dispatch({
        type: CartActionTypes.ADD_TO_CART,
        payload: product
      })

    }

    // const { id, image, title, price } = product;
    // const itemAlreadyInCart = [...cart].find(cartItem => cartItem.id === id);

    // if (itemAlreadyInCart) {
    //   increaseItemAmount(id);
    //   return;
    // }
    // else {
    //   const itemNotAlreadyInCart = { id, image, title, price, amount: 1 };
    //   const newCart = [...cart, itemNotAlreadyInCart];
    //   setCart(newCart);
    // }
  }
  // **********************************************
  // **********************************************

  //clear entire cart
  const clearCart = () => {
    dispatch({
      type: CartActionTypes.CLEAR_CART
    })
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