//***************************** products context

import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import url from '../utils/URL'

import { getFeaturedProducts, flattenProducts } from '../utils/helpers';


//Provider - Wraps APP, useContext() - Consume Data
export const ProductContext = createContext();


const ProductProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeaturedProducts] = useState([]);

  useEffect(() => {

    setLoading(true)

    axios.get(`${url}/products`).then(response => {
      //setProducts(response.data)
      const featured = getFeaturedProducts(flattenProducts(response.data));

      const products = flattenProducts(response.data);
      setProducts(products);
      setFeaturedProducts(featured);
      setLoading(false);
    })

    return () => { }
  }, []);


  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;



