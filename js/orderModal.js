import OrderForm from './orderForm.js'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    .modal {
      position: absolute;
      top: 20px;
      left: 0;
      right: 0;
      margin: auto;
      zIndex: 100;
      background-color: white;
      width: 320px;
      border-radius: 20px;
      padding: 1em;
    }
  </style>
  <div class="modal">
    <order-form />
  </div>
`

class OrderModal extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    this.root.appendChild(template.content.cloneNode(true))

    const orderForm = this.root.querySelector('order-form')
    orderForm.addEventListener('orderPlacementSuccess', () => {
      this.dispatchEvent(new CustomEvent('orderPlacementSuccess'))
    })
  }
}

customElements.define('order-modal', OrderModal)

export default OrderModal
