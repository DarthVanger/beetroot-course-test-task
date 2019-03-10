const productsListContainer = document.querySelector('.products-box')
const noProductsFoundElement = document.createElement('div')
noProductsFoundElement.innerHTML = 'No products to show'

function show() {
  if (!isShown()) {
    productsListContainer.appendChild(noProductsFoundElement)
  }
}

function hide() {
  if (isShown()) {
    noProductsFoundElement.remove()
  }
}

function isShown() {
  return productsListContainer.contains(noProductsFoundElement)
}

export default {
  show,
  hide,
}
