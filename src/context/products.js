//***************************** products context

import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import url from '../utils/URL'

import { getFeaturedProducts, flattenProducts, paginate } from '../utils/helpers';


//Provider - Wraps APP, useContext() - Consume Data
export const ProductContext = createContext();


const ProductProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeaturedProducts] = useState([]);

  //extra state values
  const [sorted, setSorted] = useState([]);
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    shipping: false,
    price: 'all'
  });

  useEffect(() => {

    setLoading(true)

    axios.get(`${url}/products`).then(response => {
      //setProducts(response.data)
      const featured = getFeaturedProducts(flattenProducts(response.data));
      const products = flattenProducts(response.data);

      setSorted(paginate(products));
      setProducts(products);
      setFeaturedProducts(featured);
      setLoading(false);
    })

    // return () => { }
  }, []);

  // -------------------------------------------------------------------------------

  const changePage = index => {
    setPage(index)
  }

  const updateFilters = e => {
    console.log(e.target.name);
    console.log(e.target.value);
  }

  // -------------------------------------------------------------------------------

  return (
    <ProductContext.Provider value={{ products, loading, featured, sorted, page, filters, changePage, updateFilters }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;



