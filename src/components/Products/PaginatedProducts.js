import React, { useContext } from 'react'
import ProductList from './ProductList';
import { ProductContext } from '../../context/products';

const PaginatedProducts = () => {
  const { sorted, page, changePage } = useContext(ProductContext);

  if (sorted[page]) {

    return (
      <>
        <ProductList products={sorted[page]} />
        {sorted.length > 1 && (
          <article className="pagination-buttons">
            {/* prev */}
            {sorted.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `page-btn-current`}`}>
                  {index + 1}
                </button>);
            })}
            {/* next */}
          </article>
        )}
      </>
    )

  } else {

    return (
      <h3 className="search-errors">{" "} search query did not return any results...</h3>
    )
  }

}

export default PaginatedProducts;