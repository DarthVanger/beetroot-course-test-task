import products from './products.js'

let items = []
let onChangeHandlers = [];

const cart = {
  add,
  remove,
  clear,
  items,
  getTotalPrice,
  onChange,
}

products.forEach(initAddProductBtn)

function onChange(handler) {
  onChangeHandlers.push(handler);
}

function handleChange(items) {
  onChangeHandlers.forEach(handler => handler(items));
}


function initAddProductBtn(product) {
  product.component.addBtn.addEventListener('click', () => add(product))
  return cart
}

function add(product) {
  console.debug('Adding product: ', product);
  cart.items.push(product)
  handleChange(items)
  return cart
}

function getTotalPrice() {
  return items.reduce((a, item) => a + item.price, 0)
}

function remove(itemToRemove) {
  items = items.filter(item => item !== itemToRemove)
  handleChange(items)
  return cart
}

function clear() {
  items = []
  handleChange(items)
  return cart
}

export default cart
