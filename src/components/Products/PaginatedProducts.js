import React, { useContext } from 'react'
import ProductList from './ProductList';
import { ProductContext } from '../../context/products';

const PaginatedProducts = () => {
  const { sorted, page, changePage } = useContext(ProductContext);

  if (sorted[page]) {

    return <ProductList products={sorted[page]} />

  } else {

    return (
      <h3 className="search-errors">{" "} search query did not return any results...</h3>
    )
  }



}

export default PaginatedProducts;