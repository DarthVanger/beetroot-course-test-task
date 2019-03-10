import cartStore from '../cartStore.js'
import filterStore from '../filterStore.js'
import categories, { getRandomCategory } from './categories.js'

const productsListContainer = document.querySelector('.products-box')
const productsNodeList = document.querySelectorAll('.product-box__item')

const noProductsFoundElement = document.createElement('div')
noProductsFoundElement.innerHTML = 'No products to show'

const productComponents = [...productsNodeList].map(node => ({
  container: node,
  title: node.querySelector('.product-box__title'),
  price: node.querySelector('.product-box__meta > p:first-child'),
  qty: node.querySelector('.qty__item'),
  addBtn: node.querySelector('.product-box__btn'),
}))

const products = productComponents.map(component => ({
  component,
  title: component.title.innerText,
  price: parseInt(component.price.innerText),
  category: getRandomCategory().name,
}))

products.forEach((product) => {
  product.component.addBtn.addEventListener('click', () => {
    cartStore.add(product)
  })

  const categoryElement = document.createElement('div')
  categoryElement.style.color = 'green'
  categoryElement.innerHTML = `Category:  ${product.category}`
  product.component.container.appendChild(categoryElement)
})

filterStore.onChange(() => {
   setState({
    productsToShow: filterStore.filter(products)
  })
})

function setState({ productsToShow }) {
  products.forEach((product) => {
    if (productsToShow.includes(product)) {
      product.component.container.style.display = 'block'
    } else {
      product.component.container.style.display = 'none'
    }
  })

  const isNoProductsFoundMessageShown = productsListContainer.contains(noProductsFoundElement)

  if (productsToShow.length === 0 && !isNoProductsFoundMessageShown) {
    productsListContainer.appendChild(noProductsFoundElement)
  } else if (isNoProductsFoundMessageShown) {
    noProductsFoundElement.remove()
  }
}

export default products
