const CATEGORY_FILTER_DISABLED_VALUE = 'Все'
const PRICE_FILTER_DISABLED_VALUE = 0

let state = {
  category: CATEGORY_FILTER_DISABLED_VALUE,
  price: PRICE_FILTER_DISABLED_VALUE,
}

const onChangeHandlers = []

function set(newState) {
  state = { ...state, ...newState }
  notifyObservers()
}

function notifyObservers() {
  onChangeHandlers.forEach(handler => handler())
}

function onChange(handler) {
  onChangeHandlers.push(handler)
}

function applyFilter(products) {
  return products
    .filter(categoryFilter)
    .filter(priceFilter)
}

function categoryFilter(product) {
  if (state.category === CATEGORY_FILTER_DISABLED_VALUE) {
    return true
  }
  return product.category === state.category
}

function priceFilter(product) {
  if (state.price === PRICE_FILTER_DISABLED_VALUE) {
    return true
  }
  return product.price <= state.price
}

export {
  CATEGORY_FILTER_DISABLED_VALUE,
  PRICE_FILTER_DISABLED_VALUE,
}
export default {
  set,
  onChange,
  applyFilter,
}
