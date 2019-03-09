import orderForm from './orderForm.js'

let modal

function createModal() {
  modal = document.createElement('div')
  modal.style.position = 'absolute'
  modal.style.top = '20px'
  modal.style.left = '0'
  modal.style.right = '0'
  modal.style.margin = 'auto'
  modal.style.zIndex = '100'
  modal.style.backgroundColor = 'white'
  modal.style.width = '320px'
  modal.style.minHeight = '320px'
  modal.style.borderRadius = '20px'
  modal.style.padding = '1em'

  modal.appendChild(orderForm.createNode())
}

function openModal() {
  createModal()
  document.body.append(modal)
}

function closeModal() {
  modal.remove()
}

export default {
  open: openModal,
  close: closeModal,
  onSubmitSuccess: orderForm.onSubmitSuccess,
}
