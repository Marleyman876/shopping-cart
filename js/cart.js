/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// Done: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.querySelector('tbody');
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

// Done: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // Done: Find the table body
  let tbody = document.querySelector('tbody');
  // Done: Iterate over the items in the cart
  // Done: Create a TR
  // Done: Create a TD for the delete link, quantity,  and the item
  // Done: Add the TR to the TBODY and each of the TD's to the TR
  for (let item of cart.items) {
    let tr = document.createElement('tr');
    let remove = document.createElement('td');
    remove.textContent = 'X';
    remove.setAttribute('value', item.product);
    tr.appendChild(remove);
    let quantity = document.createElement('td');
    quantity.textContent = item.quantity;
    tr.appendChild(quantity);
    let product = document.createElement('td');
    product.textContent = item.product;
    tr.appendChild(product);
    tbody.appendChild(tr);
  }
}

function removeItemFromCart(event) {
  // Done: When a delete link is clicked, use cart.removeItem to remove the correct item
  // Done: Save the cart back to local storage
  // Done: Re-draw the cart table
  cart.removeItem(event.target.getAttribute('value'));
  cart.saveToLocalStorage();
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
