import { CATEGORY_FILTER_DISABLED_VALUE } from './filterStore.js'

const select = document.querySelector('.filter-box .select-control')
const optionNodeList = select.querySelectorAll('option')

const categories = [...optionNodeList]
  .map(node => ({ id: node.value, name: node.innerText }))
  .filter(option => option.name !== CATEGORY_FILTER_DISABLED_VALUE)

function getRandomCategory() {
  const randomIndex = ( Math.floor(Math.random() * 10) ) % categories.length
  return categories[randomIndex]
}

export {
  getRandomCategory,
}
export default categories