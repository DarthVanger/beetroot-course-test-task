import OrderForm from './orderForm.js'

let element

function createElement() {
  element = document.createElement('div')
  element.style.position = 'absolute'
  element.style.top = '20px'
  element.style.left = '0'
  element.style.right = '0'
  element.style.margin = 'auto'
  element.style.zIndex = '100'
  element.style.backgroundColor = 'white'
  element.style.width = '320px'
  element.style.minHeight = '320px'
  element.style.borderRadius = '20px'
  element.style.padding = '1em'

  element.appendChild(document.createElement('order-form'))
}

function openModal() {
  createElement()
  document.body.append(element)
  return element
}

function closeModal() {
  element.remove()
}

export default element
export {
  openModal,
  closeModal,
}
