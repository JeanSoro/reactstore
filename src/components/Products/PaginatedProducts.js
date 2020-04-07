import React, { useContext } from 'react'
import ProductList from './ProductList';
import { ProductContext } from '../../context/products';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const PaginatedProducts = () => {
  const { sorted, page, changePage } = useContext(ProductContext);

  if (sorted[page]) {

    return (
      <>
        <ProductList products={sorted[page]} />
        {sorted.length > 1 && (
          <article className="pagination-buttons" onClick={() => changePage(page - 1)}>
            {/* prev */}
            {page > 0 && (
              <button className="prev-page-btn">
                <FaAngleDoubleLeft />
              </button>
            )}
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
            {page < sorted.length - 1 &&
              (<button className="next-page-btn" onClick={() => changePage(page + 1)}>
                <FaAngleDoubleRight />
              </button>
              )}
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