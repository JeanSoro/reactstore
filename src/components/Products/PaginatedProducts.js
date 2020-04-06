import React, { useContext } from 'react'
import ProductList from './ProductList';
import { ProductContext } from '../../context/products';

const PaginatedProducts = () => {
  const { sorted, page, changePage } = useContext(ProductContext);

  return (
    <ProductList products={sorted} />
  )
}

export default PaginatedProducts;