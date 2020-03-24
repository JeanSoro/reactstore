import React from "react";
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <section className="empty-cart section">
      <h2>Empty cart...</h2>
      <Link to="/products" className="btn btn-primary">Back to Products</Link>
    </section>
  );
}

export default EmptyCart;