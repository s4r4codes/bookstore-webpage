document.addEventListener("DOMContentLoaded", function () {
    // Initialize an empty array to store cart items from all categories
    let cart = [];

    // Define the categories you want to merge (e.g., 'comic', 'crime', 'romantic')
    const categories = ['comic', 'crime', 'romantic'];

    // Loop through each category, retrieve data from localStorage, and merge into the cart array
    categories.forEach(category => {
        const categoryCart = JSON.parse(localStorage.getItem(`cart-${category}`)) || [];
        cart = cart.concat(categoryCart); // Merge the cart data
    });

    const cartTableBody = document.getElementById("cart-table").getElementsByTagName("tbody")[0];
    const totalCostElement = document.getElementById("total-cost");

    // Function to render the cart items in the table
    function renderCart() {
        if (cart.length === 0) {
            cartTableBody.innerHTML = "<tr><td colspan='4'>Your cart is empty.</td></tr>"; // Show empty cart message
            if (totalCostElement) {
                totalCostElement.textContent = "$0.00"; // Show zero cost if the element exists
            }
            return;
        }

        cartTableBody.innerHTML = ""; // Clear existing items
        let totalCost = 0;

        // Render each item in the cart
        cart.forEach(item => {
            const row = document.createElement("tr");

            // Book Title
            const titleCell = document.createElement("td");
            titleCell.textContent = item.title;
            row.appendChild(titleCell);

            // Price
            const priceCell = document.createElement("td");
            priceCell.textContent = `$${item.price.toFixed(2)}`;
            row.appendChild(priceCell);

            // Quantity
            const quantityCell = document.createElement("td");
            quantityCell.textContent = item.quantity;
            row.appendChild(quantityCell);

            // Total Price for this item
            const totalCell = document.createElement("td");
            const itemTotal = item.price * item.quantity;
            totalCell.textContent = `$${itemTotal.toFixed(2)}`;
            row.appendChild(totalCell);

            cartTableBody.appendChild(row);
            totalCost += itemTotal;
        });

        // Delivery cost (fixed value)
        const deliveryPrice = 5.00;
        const finalCost = totalCost + deliveryPrice;

        // Update the total cost in the footer, check if totalCostElement exists
        if (totalCostElement) {
            totalCostElement.textContent = `$${finalCost.toFixed(2)}`;
        } else {
            console.error('Total cost element not found!');
        }
    }

    // Render the cart when the page is loaded
    renderCart();
});
