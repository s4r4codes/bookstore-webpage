document.getElementById("checkoutForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form fields
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const paymentMethod = document.getElementById("paymentMethod").value.trim();
    const cardDetails = document.getElementById("cardDetails").value.trim();
  
    // Validate full name
    if (!fullName || fullName.length < 3 || !/^[a-zA-Z\s]+$/.test(fullName)) {
      alert("Full name must be at least 3 characters long and contain only letters and spaces.");
      return;
    }
  
    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Validate address
    if (!address || address.length < 10) {
      alert("Address must be at least 10 characters long.");
      return;
    }
  
    // Validate payment method
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
  
    // Validate card details (if payment method is credit card)
    if (paymentMethod === "creditCard") {
      const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
      if (!cardPattern.test(cardDetails)) {
        alert("Please enter a valid card number in the format 1234-5678-9876-5432.");
        return;
      }
    }
  
    // Show confirmation message
    document.getElementById("confirmationMessage").classList.remove("hidden");
  
    // Reset form
    document.getElementById("checkoutForm").reset();
  });
  
  
  