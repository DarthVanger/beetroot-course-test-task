const FILTER_DISABLED_OPTION_NAME = 'Все'

let state = {
  category: FILTER_DISABLED_OPTION_NAME,
  price: FILTER_DISABLED_OPTION_NAME,
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

function filter(products) {
  return products.filter(categoryFilter)
}

function categoryFilter(product) {
  if (state.category === FILTER_DISABLED_OPTION_NAME) {
    return true
  }
  return product.category === state.category
}

export default {
  set,
  onChange,
  filter,
}
