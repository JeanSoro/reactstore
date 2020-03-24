import React, { useContext } from "react";
import { ProductContext } from '../context/products';
import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList'


const ProductsPage = () => {
  const { products, loading } = useContext(ProductContext);
  console.log(products);

  if (loading) {
    return <Loading />
  }

  return <ProductList title="our products" products={products} />

}


export default ProductsPage;