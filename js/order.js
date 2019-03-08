import orderModal from './orderModal.js'

const orderBtn = document.querySelector('.btn-check')

orderBtn.addEventListener('click', orderModal.open)

export default {
  orderBtn,
}
