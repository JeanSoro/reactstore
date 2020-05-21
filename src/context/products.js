//***************************** products context

import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import url from '../utils/URL';
import { socialData } from './socialData';

import { getFeaturedProducts, flattenProducts, paginate } from '../utils/helpers';


//Provider - Wraps APP, useContext() - Consume Data
export const ProductContext = createContext();


const ProductProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeaturedProducts] = useState([]);
  const [links, setLinks] = useState(socialData)

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

    return () => { }
  }, []);

  const changePage = index => {
    setPage(index)
  }

  // -------------------------------------------------------------------------------

  useEffect(() => {

    let newProducts = [...products].sort((a, b) => {
      return a.price - b.price
    });

    const { search, category, shipping, price } = filters;

    if (category !== 'all') {
      newProducts = newProducts.filter(item => item.category === category)
    }

    if (shipping !== false) {
      newProducts = newProducts.filter(item => item.free_shipping === shipping)
    }

    if (search !== '') {
      newProducts = newProducts.filter(item => {
        let title = item.title.toLowerCase().trim();
        return title.startsWith(search) ? item : null;

      })
    }

    if (price !== 'all') {
      newProducts = newProducts.filter(item => {
        if (price === 0) {
          return item.price < 300
        }
        else if (price === 300) {
          return item.price > 300 && item.price < 650
        } else {
          return item.price > 650;
        }
      })
    }


    //getting default values
    setPage(0);
    setSorted(paginate(newProducts))
  }, [filters, products]);

  // -------------------------------------------------------------------------------

  const updateFilters = e => {
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;
    let filterValue;
    if (type === 'checkbox') {
      filterValue = e.target.checked;
    } else if (type === 'radio') {
      value === 'all' ? (filterValue = value) : (filterValue = parseInt(value))
    } else {
      filterValue = value
    }
    setFilters({ ...filters, [filter]: filterValue });

  }

  // -------------------------------------------------------------------------------

  return (
    <ProductContext.Provider value={{ products, links, loading, featured, sorted, page, filters, changePage, updateFilters }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;



