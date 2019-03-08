import cart from './cart.js'

const modal = createModal()
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

const form = modal.querySelector('form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const { validationErrorMessages, isFormValid } = validateOrderForm(form)
  if (isFormValid) {
    alert('Your order was submitted! Thank you for your purchase!')
    cart.clear()
    closeModal()
  } else {
    alert(`The form is invalid:\n${validationErrorMessages.join('\n')}`) 
  }
})

function validateOrderForm(form) {
  const name = form.querySelector('input[name="name"]').value
  const email = form.querySelector('input[name="email"]').value
  const validationErrorMessages = []
  if (name.trim() === '') {
    validationErrorMessages.push('Name field should not be empty')
  }
  if (email.trim() === '') {
    validationErrorMessages.push('Email field should not be empty')
  }
  const isFormValid = (validationErrorMessages.length === 0)
  return { isFormValid, validationErrorMessages }
}

function createModal() {
  const modalTemplate = `
    <div>
      <h2 style="text-align: center">Place an order</h2>
      <form novalidate>
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
    </div>
  `
  const template = document.createElement('template')
  template.innerHTML = modalTemplate.trim()
  return template.content.firstChild
}

function openModal() {
  document.body.append(modal)
}

function closeModal() {
  modal.remove()
}

export default {
  open: openModal,
  close: closeModal,
}

