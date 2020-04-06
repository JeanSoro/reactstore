import url from './URL';

//flatten

export const flattenProducts = (data) => {
  return data.map(item => {
    //cloudinary
    let image = (item.image && item.image.url) || null;

    //local deployment
    // let image = `${url}${item.image.url}`;
    return { ...item, image };
  })
}


// helper functions

export const getFeaturedProducts = (data) => {
  return data.filter(item => item.featured === true)
}

export const paginate = products => {
  //code goes here
  const productsPerPage = 4;
  const numberOfPages = Math.ceil(products.length / productsPerPage);

  const newProducts = Array.from({ length: numberOfPages }, () => {
    return products.splice(0, productsPerPage)
  })


  return products;
}