import orderModal, { openModal, closeModal } from './orderModal.js'
import cart from './cart.js'

const orderBtn = document.querySelector('.btn-check')

orderBtn.addEventListener('click', () => {
  const modal = openModal()
  modal.addEventListener('orderPlacementSuccess', () => {
    alert('Your order was submitted! Thank you for your purchase!')
    closeModal()
    cart.clear()
  })
})


export default {
  orderBtn,
}
