import React, { useContext, useState } from "react";
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { useHistory } from 'react-router-dom';
import EmptyCart from '../components/Cart/EmptyCart';

//react-stripe-element
import submitOrder from '../strapi/submitOrder'
import { emptyStatement } from "@babel/types";

const Checkout = (props) => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = useContext(UserContext);
  const history = useHistory();

  //state values

  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const isEmpty = !name || alert.show;

  const handleSubmit = async (e) => {
    e.preventDefault();

  }

  if (cart.length < 1) return <EmptyCart />

  return (
    <section className="section form">
      <h2 className="section-title">checkout</h2>
      <form className="checkout-form">
        <h3>
          order total: <span>${total}</span>
        </h3>
        {/* single input */}
        <div className="form-control">
          <label htmlFor="name">name</label>
          <input type="text" value={name} id="name" onChange={(e) => { setName(e.target.value) }} />
        </div>
        {/* end single input */}
        {/* Card element */}
        <div className="stripe-input">
          <label htmlFor="card-element">credit or debit card</label>
          <p className="stripe-info">
            Test using this number : <span>4242 4242 4242 4242</span> <br />
            enter any 5 digits for the zip code <br />
            enter 3 digits for the CVC
          </p>
        </div>
        {/* end of Card element */}

        {/* STRIPE ELEMENTS */}
        {/* stripe errors */}
        {error && <p className="form-empty">{error}</p>}
        {/* empty value */}
        {isEmpty
          ? <p className="form-empty">please fill out name field</p>
          : <button className="btn btn-primary btn-block" type="submit" onClick={handleSubmit}>Submit</button>
        }

        {/* END OF STRIPE ELEMENTS */}
      </form>
    </section>
  );
}

export default Checkout;