import React, { useContext } from "react";
import ProductList from './ProductList';
import { ProductContext } from '../../context/products';
import Loading from '../Loading';

const FeaturedProducts = () => {

  const { loading, featuredProducts } = useContext(ProductContext);

  if (loading) {
    return <Loading />
  }

  return (
    <ProductList title="featured products" products={featuredProducts} />
  )
}

export default FeaturedProducts;