let cart = [];
function addToCart(name, price) {
  cart.push({name, price});
  renderCart();
}
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const totalEl = document.getElementById('total');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₩${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalEl.textContent = total;
}