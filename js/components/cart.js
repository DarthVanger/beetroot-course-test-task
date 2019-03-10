import cartStore from '../cartStore.js'

const container = document.querySelector('.top-cart')
const productsCountNode = document.querySelector('.top-cart-info__item > span:nth-child(1)')
const totalPriceNode = document.querySelector('.top-cart-info__item > span:nth-child(2)')

deriveStateFromCartStore()
cartStore.onChange(deriveStateFromCartStore)

function deriveStateFromCartStore() {
  setState({
    productsCount: cartStore.getProductsCount(),
    totalPrice: cartStore.getTotalPrice(),
  })
}

function setState({ productsCount, totalPrice }) {
  productsCountNode.innerHTML = productsCount
  totalPriceNode.innerHTML = totalPrice
}

export default {
  container,
  productsCountNode,
  totalPriceNode,
  setState,
}
