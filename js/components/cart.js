import cartStore from '../cartStore.js'

const container = document.querySelector('.top-cart')

const productsCountNode = document.querySelector('.top-cart-info__item > span:nth-child(1)')

const totalPriceNode = document.querySelector('.top-cart-info__item > span:nth-child(2)')

syncWithCart()
cartStore.onChange(syncWithCart)

function syncWithCart() {
  setState({
    productsCount: cartStore.getItems().length,
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
  syncWithCart,
  setState,
}
