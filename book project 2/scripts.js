// Example login validation
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // For demo purposes, just check hardcoded values
    if (email === "user@example.com" && password === "password123") {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to homepage
    } else {
      document.getElementById("login-error").style.display = "block";
    }
  });
  
  // Example registration validation
  document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password === confirmPassword) {
      alert("Registration successful!");
      window.location.href = "login.html"; // Redirect to login page
    } else {
      alert("Passwords do not match.");
    }
  });
  


  // Add to cart function
function addToCart(title, image, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if item is already in cart
    const existingItem = cart.find(item => item.title === title);
  
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ title, image, price, quantity: 1 });
    }
  
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    alert(`${title} added to cart!`);
  }
  
  // Display cart items on the cart page
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalPriceContainer.innerHTML = 'Total: $0.00';
    } else {
      cartItemsContainer.innerHTML = '';
      let totalPrice = 0;
  
      cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
          <img src="${item.image}" alt="${item.title}" width="50">
          <h4>${item.title}</h4>
          <p>Price: $${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
  
        totalPrice += item.price * item.quantity;
      });
  
      totalPriceContainer.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
    }
  }
  
  // Display cart when the cart page is loaded
  if (window.location.pathname.includes('cart.html')) {
    displayCart();
  }
  

  // Display the cart summary on the payment page
function displayCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSummaryContainer = document.getElementById('cart-summary');
    const totalPriceContainer = document.getElementById('total-price');
  
    if (cart.length === 0) {
      cartSummaryContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cartSummaryContainer.innerHTML = '';
      let totalPrice = 0;
  
      cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
          <img src="${item.image}" alt="${item.title}" width="50">
          <h4>${item.title}</h4>
          <p>Price: $${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartSummaryContainer.appendChild(itemElement);
  
        totalPrice += item.price * item.quantity;
      });
  
      totalPriceContainer.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
    }
  }
  
  // Handle payment form submission
  document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Mock payment logic
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
  
    // Simple validation for the form (you can add more robust validation here)
    if (cardName && cardNumber && expiryDate && cvv) {
      // Simulate a successful payment (You can replace this with real payment gateway logic)
      setTimeout(function() {
        document.getElementById('payment-status').style.display = 'block';
        document.getElementById('payment-error').style.display = 'none';
  
        // Clear the cart after successful payment
        localStorage.removeItem('cart');
      }, 2000); // Simulate a 2-second delay for payment processing
    } else {
      document.getElementById('payment-error').style.display = 'block';
      document.getElementById('payment-status').style.display = 'none';
    }
  });
  
  // Display cart summary when the payment page is loaded
  if (window.location.pathname.includes('payment.html')) {
    displayCartSummary();
  }
  

  // Store customer details in localStorage (Customer Details Page)
document.getElementById('customer-details-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postal-code').value;
    const country = document.getElementById('country').value;
  
    // Store customer data in localStorage
    const customerDetails = {
      fullName,
      email,
      phone,
      address,
      city,
      postalCode,
      country
    };
    
    localStorage.setItem('customerDetails', JSON.stringify(customerDetails));
  
    // Redirect to review page
    window.location.href = 'review-order.html';
  });
  
  // Display customer info and cart on review page
  function displayReview() {
    const customerDetails = JSON.parse(localStorage.getItem('customerDetails')) || {};
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Display customer info
    document.getElementById('review-full-name').innerText = customerDetails.fullName || 'Not provided';
    document.getElementById('review-email').innerText = customerDetails.email || 'Not provided';
    document.getElementById('review-phone').innerText = customerDetails.phone || 'Not provided';
    document.getElementById('review-address').innerText = customerDetails.address || 'Not provided';
    document.getElementById('review-city').innerText = customerDetails.city || 'Not provided';
    document.getElementById('review-postal-code').innerText = customerDetails.postalCode || 'Not provided';
    document.getElementById('review-country').innerText = customerDetails.country || 'Not provided';
    
    // Display cart items
    const cartSummaryContainer = document.getElementById('cart-summary');
    if (cart.length === 0) {
      cartSummaryContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cartSummaryContainer.innerHTML = '';
      let totalPrice = 0;
  
      cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
          <img src="${item.image}" alt="${item.title}" width="50">
          <h4>${item.title}</h4>
          <p>Price: $${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
        `;
        cartSummaryContainer.appendChild(itemElement);
  
        totalPrice += item.price * item.quantity;
      });
  
      cartSummaryContainer.innerHTML += `<p><strong>Total: $${totalPrice.toFixed(2)}</strong></p>`;
    }
  }
  
  // Display review details when the page is loaded
  if (window.location.pathname.includes('review-order.html')) {
    displayReview();
  }
  