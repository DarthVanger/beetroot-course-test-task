import OrderModal from './orderModal.js'
import cart from './cart.js'

const orderBtn = document.querySelector('.btn-check')

orderBtn.addEventListener('click', () => {
  const modal = document.createElement('order-modal')
  document.body.append(modal)
  modal.addEventListener('orderPlacementSuccess', () => {
    alert('Your order was submitted! Thank you for your purchase!')
    modal.remove()
    cart.clear()
  })
})


export default {
  orderBtn,
}
