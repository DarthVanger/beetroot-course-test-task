import filterStore from '../filterStore.js'

const categorySelect = document.querySelector('.filter-box .select-control')
const priceSelect = document.querySelector('.price-select-box .select-control')

categorySelect.addEventListener('change', () => {
  const selectedOptionValue = categorySelect.value
  const selectedOptionName = categorySelect
    .querySelector(`option[value="${selectedOptionValue}"`).innerText

  filterStore.set({
    category: selectedOptionName,
  })

  console.debug('Filter changed: selectedOptionName: ', selectedOptionName)
})

export default priceSelect
