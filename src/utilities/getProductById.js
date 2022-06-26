import products from './products';

const getProductById = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(products.find(product => product.id === id));
    }, 2000)
  });
}

export default getProductById;