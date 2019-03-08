const form = createForm()
let onSubmitSuccessHandler = () => {}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const { errorMessages, isValid } = validate(form)
  if (isValid) {
    onSubmitSuccessHandler()
  } else {
    alert(`The form is invalid:\n${errorMessages.join('\n')}`) 
  }
})

function createForm() {
  const formTemplate  = `
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
  const template = document.createElement('template')
  template.innerHTML = formTemplate.trim()
  return template.content.firstChild
}

function validate(form) {
  const name = form.querySelector('input[name="name"]').value
  const email = form.querySelector('input[name="email"]').value
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

function onSubmitSuccess(handler) {
  onSubmitSuccessHandler = handler
}

export default {
  onSubmitSuccess,
  node: form,
}
