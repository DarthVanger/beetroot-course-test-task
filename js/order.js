import orderModal from './orderModal.js'
import cart from './cart.js'

const orderBtn = document.querySelector('.btn-check')

orderBtn.addEventListener('click', orderModal.open)

orderModal.onSubmitSuccess(() => {
  alert('Your order was submitted! Thank you for your purchase!')
  orderModal.close()
  cart.clear()
})

export default {
  orderBtn,
}
