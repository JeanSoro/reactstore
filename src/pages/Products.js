import React, { useContext } from "react";
import { ProductContext } from '../context/products'


const Products = () => {
  console.log(useContext(ProductContext))

  return <h1>hello from products page</h1>;
}


export default Products;