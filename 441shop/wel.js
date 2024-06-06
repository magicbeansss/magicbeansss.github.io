//Tao Tianyi  , Bob
function showPage(pageId) {
    // Retrieve all pages
    var pages = document.querySelectorAll('.page');
     // Hide all pages
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    // Show the specified page
    document.getElementById(pageId).style.display = 'block';
}

// Function to create a new user account
function createUser() {
     // Retrieve the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Alert the user about the successful
    alert("User created successfully!");
    showPage('loginPage');
}

function login() {
   // var loginUsername = document.getElementById("loginUsername").value;
    //var loginPassword = document.getElementById("loginPassword").value;
  //  if (loginUsername === "user" && loginPassword === "password") {
        showPage('shoppingPage');
  //  } else {
   //     alert("Invalid username or password. Please try again.");
   // }
}

function checkout() {
    var quantity = parseInt(document.getElementById("quantity").value);
    var product = parseInt(document.getElementById("productSelect").value);
    var total = quantity * product;
    document.getElementById("totalOrder").innerText = "Total Order: $" + total;
}