import filterStore from '../filterStore.js'

const categorySelect = document.querySelector('.filter-box .select-control')
const priceSelect = document.querySelector('.price-select-box .select-control')

categorySelect.addEventListener('change', () => {
  const selectedOptionValue = categorySelect.value
  const selectedOptionName = categorySelect
    .querySelector(`option[value="${selectedOptionValue}"`).innerText

  filterStore.set({
    category: { id: selectedOptionValue, name: selectedOptionName }
  })

  console.debug('Filter changed: category filter name: ', selectedOptionName)
})

priceSelect.addEventListener('change', () => {
  const selectedOptionValue = parseInt(priceSelect.value)

  filterStore.set({
    price: selectedOptionValue
  })

  console.debug('Filter changed: price filter value: ', selectedOptionValue)
})

export default priceSelect
