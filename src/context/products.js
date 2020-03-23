//***************************** products context

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL'

import { getFeaturedProducts } from '../utils/helpers';


//Provider - Wraps APP, useContext() - Consume Data
export const ProductContext = React.createContext();


const ProductProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {

    setLoading(true)

    axios.get(`${url}/products`).then(response => {
      //setProducts(response.data)
      const featuredProducts = getFeaturedProducts(response.data);
      setProducts(response.data);
      setFeaturedProducts(featuredProducts);
      setLoading(false);
    })

    return () => { }
  }, []);


  return (
    <ProductContext.Provider value={{ products, loading, featuredProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;



