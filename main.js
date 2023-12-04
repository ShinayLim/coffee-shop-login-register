let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
        search.classList.toggle('active');
        navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
        navbar.classList.toggle('active');
        search.classList.remove('active');
}

window.onscroll = () => {
        navbar.classList.remove('active');
        search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function () {
        // Initialize cart count and cart items array
        let cartCount = 0;
        const cartCountElement = document.getElementById("cart-count");
        const cartItems = [];
        const cartItemsList = document.getElementById("cart-items-list");
        const cartTotalElement = document.getElementById("cart-total");
      
        // Function to update the cart count
        function updateCartCount() {
          cartCountElement.textContent = cartCount;
        }
      
        // Function to update the cart items list and calculate the total
        function updateCart() {
          cartItemsList.innerHTML = "";
          let cartTotal = 0;
      
          cartItems.forEach(function (item) {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(listItem);
            cartTotal += item.price;
          });
      
          cartTotalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;
        }
      
        // Function to handle adding items to the cart
        function addToCart(name, price) {
          cartCount++;
          updateCartCount();
          cartItems.push({ name, price });
          updateCart();
        }
      
        // Add a click event listener to all "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll(".add-to-cart");
        addToCartButtons.forEach(function (button) {
          button.addEventListener("click", function () {
            const productName = button.parentElement.previousElementSibling.textContent;
            const productPrice = parseFloat(button.parentElement.querySelector("span").textContent.slice(1));
            addToCart(productName, productPrice);
          });
        });
      
        // Add a click event listener to the cart icon to show/hide the cart container
        const cartIcon = document.querySelector(".bx-cart-alt");
        const cartContainer = document.getElementById("cart-container");
        cartIcon.addEventListener("click", function () {
          cartContainer.classList.toggle("show-cart");
        });
      });

// Login and Register
var loginModal = document.getElementById('loginModal');
var registerModal = document.getElementById('registerModal');
var loginBtn = document.querySelector('.login_btn');
var registerBtn = document.querySelector('.btn');
var closeButtons = document.getElementsByClassName('close');

loginBtn.onclick = function() {
    loginModal.style.display = 'block';
}

registerBtn.onclick = function() {
    registerModal.style.display = 'block';
}

Array.from(closeButtons).forEach(function(element) {
    element.onclick = function() {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    }
});

// Close Modal If Outside Click
window.onclick = function(event) {
    if (event.target == loginModal || event.target == registerModal) {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
    }
}

      
