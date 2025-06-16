let cart = [];

function addToCart(productName, price) {
  const item = {
    name: productName,
    price: price
  };

  cart.push(item);
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = ''; // Clear existing items

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
}
