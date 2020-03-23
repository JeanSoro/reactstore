// helper functions

export const getFeaturedProducts = (products) => {
  return products.filter(product => product.featured === true)
}