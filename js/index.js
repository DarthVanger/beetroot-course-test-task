import cart from './cart.js';

const productBoxesNodeList = document.querySelectorAll('.product-box__item');

const productElements = [...productBoxesNodeList].map(node => ({
  node,
  title: node.querySelector('.product-box__title'),
  price: node.querySelector('.product-box__meta > p:first-child'),
}));

const products = productElements.map(element => ({
  element,
  title: element.title.innerText,
  price: parseInt(element.price.innerText),
}));

console.log('products: ', products);
