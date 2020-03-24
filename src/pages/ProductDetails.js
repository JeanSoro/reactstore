import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/products';
import { CartContext } from '../context/cart';

import Loading from '../components/Loading';
import { useHistory } from 'react-router-dom';

export default function ProductDetails() {
  let { id } = useParams();
  const history = useHistory();

  const { products } = useContext(ProductContext);

  const { addItemToCart } = useContext(CartContext);

  const singleProduct = products.find(product => product.id === parseInt(id));


  if (singleProduct.length === 0) {
    return (
      <Loading />
    )
  } else {
    const { image, title, price, description } = singleProduct;

    return (
      <section className="single-product">
        <img src={image} alt={title} className="single-product-image" />
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button onClick={() => {
            //add to cart
            addItemToCart(singleProduct);
            history.push('/cart');

          }} className="btn btn-primary btn-block">Add To Cart</button>
        </article>
      </section>
    )
  }


}
