let onSubmitSuccessHandler = () => {}

const template = document.createElement('template');
template.innerHTML = `
  <form novalidate>
    <h2 style="text-align: center">Place an order</h2>
    <div>
      <label>Name</label>
      <input type="text" name="name" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" name="email" />
    </div>
    <button type="submit">Submit</button>
  </form>
`

export class OrderForm extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    this.root.appendChild(template.content.cloneNode(true))

    this.form = this.root.querySelector('form')

    this.form.addEventListener('submit', event => this.onSubmit(event))
  }

  onSubmit(event) {
    event.preventDefault()
    const { errorMessages, isValid } = this.validate()
    if (isValid) {
      onSubmitSuccessHandler()
    } else {
      alert(`The form is invalid:\n${errorMessages.join('\n')}`) 
    }
  }

  validate() {
    const name = this.root.querySelector('input[name="name"]').value
    const email = this.root.querySelector('input[name="email"]').value
    const errorMessages = []
    if (name.trim() === '') {
      errorMessages.push('Name field should not be empty')
    }
    if (email.trim() === '') {
      errorMessages.push('Email field should not be empty')
    }
    const isValid = (errorMessages.length === 0)
    return { isValid, errorMessages }
  }
}

customElements.define('order-form', OrderForm)

function onSubmitSuccess(handler) {
  onSubmitSuccessHandler = handler
}

export default {
  onSubmitSuccess,
}
