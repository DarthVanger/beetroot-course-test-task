import OrderModal from './components/OrderModal.js'
import cartStore from './cartStore.js'

const orderBtn = document.querySelector('.btn-check')

orderBtn.addEventListener('click', () => {
  const modal = document.createElement('order-modal')
  document.body.append(modal)
  modal.addEventListener('orderPlacementSuccess', () => {
    alert('Your order was submitted! Thank you for your purchase!')
    modal.remove()
    cartStore.clear()
  })
})


export default {
  orderBtn,
}
