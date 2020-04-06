import React, { useContext } from "react";
import { ProductContext } from '../context/products';
import Loading from '../components/Loading';
// import ProductList from '../components/Products/ProductList';
import PaginatedProducts from '../components/Products/PaginatedProducts';
import Filters from '../components/Products/Filters';


const ProductsPage = () => {
  const { sorted, loading } = useContext(ProductContext);
  console.log(sorted);

  if (loading) {
    return <Loading />
  }

  // return <ProductList title="our products" products={sorted} />

  return (
    <>
      <Filters />
      <PaginatedProducts />
    </>)

}


export default ProductsPage;