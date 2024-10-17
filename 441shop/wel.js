// Tao Tianyi  , Bob
let cart = []; // Array to store items in the shopping cart
let totalPrice = 0; // Variable to track total price of items in the cart
let isLoggedIn = false; // Flag to check if the user is logged in

function showPage(pageId) {
    // Get all elements with the class 'page'
    var pages = document.querySelectorAll('.page');
    // Hide all pages
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    // Show the specified page
    document.getElementById(pageId).style.display = 'block';
}

function createUser() {
    // Get username and password input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate inputs, ensuring both are filled
    if (username === '' || password === '') {
        alert("Please enter both username and password.");
        return;
    }

    // Store username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Display success message and navigate to login page
    alert("User created successfully!");
    showPage('loginPage');
}

function login() {
    // Get login username and password input values
    var loginUsername = document.getElementById("loginUsername").value.trim();
    var loginPassword = document.getElementById("loginPassword").value.trim();

    // Validate inputs, ensuring both are filled
    if (loginUsername === '' || loginPassword === '') {
        alert("Please enter both username and password.");
        return;
    }

    // Retrieve stored username and password from local storage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // Check if provided credentials match stored values
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        // Display success message, set login flag, show shopping page, and update navigation
        alert("Login successful!");
        isLoggedIn = true;
        document.getElementById('shoppingLink').style.display = 'inline';
        showPage('shoppingPage');
    } else {
        // Display error message and clear login fields
        alert("Invalid username or password. Please try again.");
        clearLoginFields();
    }
}

function clearLoginFields() {
    // Clear username and password input fields
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
}

function addToCart(productName, productPrice, quantity) {
    // Check if user is logged in
    if (!isLoggedIn) {
        alert("Please log in to access shopping cart.");
        return;
    }

    // Convert quantity to integer and validate
    quantity = parseInt(quantity);
    if (isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid quantity');
        return;
    }

    // Add selected product to cart and update total price
    for (let i = 0; i < quantity; i++) {
        cart.push({ name: productName, price: productPrice });
        totalPrice += productPrice;
    }
    updateCart(); // Update cart display
}

function updateCart() {
    // Get the element to display cart items
    const cartItems = document.getElementById('cart-items');
    // Clear existing cart items
    cartItems.innerHTML = '';
    // Loop through each item in the cart
    cart.forEach(item => {
        // Create a div element for each item
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.textContent = `${item.name} - $${item.price}`;
        // Append the div to the cart items container
        cartItems.appendChild(div);
    });
    // Update the total price display
    document.getElementById('total-price').textContent = totalPrice;
}

function checkout() {
    // Check if the cart is empty
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    // Display a checkout confirmation message and clear the cart
    alert('Checkout successful! Total amount: $' + totalPrice);
    cart = [];
    totalPrice = 0;
    updateCart();
}
