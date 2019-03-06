const buttons = document.querySelectorAll('.product-box__btn');

buttons.forEach(addClickListener);

function addClickListener(button) {
  //button.addEventListener('click', addToCart);
}

function addToCart(event) {
  console.log('event: ', event);
}

const cart = 'cart';
export default cart;
