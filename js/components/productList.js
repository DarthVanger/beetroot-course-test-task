import cartStore from '../cartStore.js'
import filterStore from '../filterStore.js'
import { getRandomCategory } from '../productCategories.js'
import noProductsFoundMessage from './noProductsFoundMessage.js'

const productsNodeList = document.querySelectorAll('.product-box__item')

const productComponents = [...productsNodeList].map(node => ({
  container: node,
  title: node.querySelector('.product-box__title'),
  price: node.querySelector('.product-box__meta > p:first-child'),
  qty: node.querySelector('.qty__item'),
  addToCartBtn: node.querySelector('.product-box__btn'),
}))

const products = productComponents.map(component => ({
  component,
  title: component.title.innerText,
  price: parseInt(component.price.innerText),
  category: getRandomCategory().name,
}))

products.forEach(initAddToCartBtn)
products.forEach(renderProductCategory)

filterStore.onChange(() => {
   setState({
    productsToShow: filterStore.applyFilter(products)
  })
})

function initAddToCartBtn(product) {
  product.component.qty.setAttribute('min', '1')

  product.component.addToCartBtn.addEventListener('click', () => {
    const qtyInputValue = product.component.qty.value
    const quantity = qtyInputValue ?
      parseInt(qtyInputValue) :
      1

    if (isNaN(quantity) || quantity < 1) {
      alert(`Specified product quantity "${qtyInputValue}" is invalid`)
    } else {
      cartStore.add({ product, quantity })
      product.component.qty.value = ''
    }
  })
}

function renderProductCategory(product) {
  const categoryElement = document.createElement('div')
  categoryElement.style.color = 'green'
  categoryElement.innerHTML = `Category:  ${product.category}`
  product.component.container.appendChild(categoryElement)
}

function setState({ productsToShow }) {
  products.forEach((product) => {
    if (productsToShow.includes(product)) {
      product.component.container.style.display = 'block'
    } else {
      product.component.container.style.display = 'none'
    }
  })

  if (productsToShow.length === 0) {
    noProductsFoundMessage.show()
  } else {
    noProductsFoundMessage.hide()
  }
}

export default products
