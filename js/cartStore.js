let items = []
let onChangeHandlers = [];

const cart = {
  add,
  remove,
  clear,
  getItems,
  getTotalPrice,
  onChange,
}

function onChange(handler) {
  onChangeHandlers.push(handler);
}

function handleChange(items) {
  onChangeHandlers.forEach(handler => handler(items));
}

function getItems() {
  return items
}

function add(product) {
  console.debug('Adding product: ', product);
  items.push(product)
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
