// products context

import React from 'react';
export const ProductContext = React.createContext();

//Provider - Wraps APP, Consumer or useContext() - Consume Data

const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value="hello">
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;



