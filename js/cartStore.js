let items = []
let onChangeHandlers = [];

const cart = {
  add,
  remove,
  clear,
  getItems,
  getTotalPrice,
  getProductsCount,
  onChange,
}

function onChange(handler) {
  onChangeHandlers.push(handler);
}

function handleChange(items) {
  notifyObservers(items)
}

function notifyObservers(items) {
  onChangeHandlers.forEach(handler => handler(items));
}

function getItems() {
  return items
}

function add({ product, quantity }) {
  if (!quantity) quantity = 1
  console.debug(`Adding ${quantity} products to cart: `, product);

  if (hasProduct(product)) {
    setQuantity({ product, quantity })
  } else {
    addNewItem({ product, quantity })
  }

  return cart
}

function addNewItem({ product, quantity }) {
  items.push({ product, quantity })
  handleChange(items)
  return cart
}

function getTotalPrice() {
  return items.reduce((a, item) => a + (item.product.price * item.quantity), 0)
}

function hasProduct(product) {
  return items.filter(item => item.product === product).length > 0
}

function setQuantity({ product, quantity }) {
  items = items.map(item => {
    if (item.product === product) {
      item.quantity += quantity
    }
    return item
  })
  handleChange(items)
  return cart
}

function getProductsCount() {
  return items.reduce((a, item) => a + item.quantity, 0)
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
