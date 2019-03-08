const productsNodeList = document.querySelectorAll('.product-box__item')

const productComponents = [...productsNodeList].map(node => ({
  container: node,
  title: node.querySelector('.product-box__title'),
  price: node.querySelector('.product-box__meta > p:first-child'),
  qty: node.querySelector('.qty__item'),
  addBtn: node.querySelector('.product-box__btn'),
}));

const products = productComponents.map(component => ({
  component,
  title: component.title.innerText,
  price: parseInt(component.price.innerText),
}));

export default products
