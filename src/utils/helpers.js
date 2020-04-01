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