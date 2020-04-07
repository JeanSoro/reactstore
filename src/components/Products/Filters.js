import React, { useContext } from 'react'
import { ProductContext } from '../../context/products'

const Filters = () => {
  const { filters: { search, category, shipping, price }, updateFilters, sorted } = useContext(ProductContext)
  return (
    <section className="filters-section">
      <h2 className="section-title">Search Products</h2>
      <form className="filters-form">
        <div>
          {/* search input */}
          <div className="form-group">
            <label htmlFor="search">Search term</label>
            <input className="form-control"
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={updateFilters} />
          </div>
          {/* end of search input */}

          {/* select category */}
          <div className="form-group">
            <label htmlFor="category">category</label>
            <select className="form-control"
              name="category"
              id="category"
              value={category}
              onChange={updateFilters}>
              <option value="all">all</option>
              <option value="jackets">jackets</option>
              <option value="tshirt">tshirt</option>
              <option value="sneakers">sneakers</option>
            </select>
          </div>
          {/* end of select category */}

          {/* free shipping */}
          <div className="form-group">
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor="shipping">free shipping</label>
          </div>
          {/* end of free shipping */}
        </div>
        <div className="price-group">
          <p>price</p>
          <label>
            <input type="radio"
              name="price"
              value="all"
              checked={price === 'all'}
              onChange={updateFilters} />
            all </label>
          <label>
            <input type="radio"
              name="price"
              value="0"
              checked={price === 0}
              onChange={updateFilters} />
            $0 - $300 </label>
          <label>
            <input type="radio"
              name="price"
              value="300"
              checked={price === 300}
              onChange={updateFilters} />
            $300 - $600 </label>
          <label>
            <input type="radio"
              name="price"
              value="600"
              checked={price === 600}
              onChange={updateFilters} />
            Over $600</label>
        </div>
      </form>
      <h6>total products : {sorted.flat().length}</h6>
      <hr />
    </section>
  )
}

export default Filters;