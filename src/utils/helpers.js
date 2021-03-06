import url from './URL';

// helper functions

//flatten
export const flattenProducts = data => {
  return data.map(item => {
    //cloudinary
    let image = (item.image && item.image.url) || null;

    //local deployment
    // let image = `${url}${item.image.url}`;
    return { ...item, image };
  })
};


export const getFeaturedProducts = data => {
  return data.filter(item => item.featured === true)
};

export const paginate = products => {

  const productsPerPage = 12;
  const numberOfPages = Math.ceil(products.length / productsPerPage);

  //non destructive slice
  const newProducts = Array.from({ length: numberOfPages }, (_, index) => {

    const start = index * productsPerPage
    return products.slice(start, start + productsPerPage)
  })

  // const newProducts = Array.from({ length: numberOfPages }, () => {
  //   return products.splice(0, productsPerPage);
  // })

  return newProducts;
};