import { CATEGORY_FILTER_DISABLED_VALUE } from './filterStore.js'

const select = document.querySelector('.filter-box .select-control')
const optionNodeList = select.querySelectorAll('option')

const categories = [...optionNodeList]
  .map(node => ({ id: node.value, name: node.innerText }))
  .filter(option => option.name !== CATEGORY_FILTER_DISABLED_VALUE.name)

export default categories
