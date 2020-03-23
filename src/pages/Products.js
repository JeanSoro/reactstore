import React, { useContext } from "react";
import { ProductContext } from '../context/products'


const Products = () => {
  const { products, loading, featuredProducts } = useContext(ProductContext);

  return <h1>hello from products page</h1>;
}


export default Products;