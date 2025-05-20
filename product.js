document.addEventListener("DOMContentLoaded", function () {
    const books = [
        {
            id: 1,
            title: "Darkness Falls",
            price: 10,
            rating: 4.5,
            image: "crime thrillers/image1.jpg",
            author: "Robert Bryndza"
        },
        {
            id: 2,
            title: "The Girl in the ICE",
            price: 15,
            rating: 4.8,
            image: "crime thrillers/image2.jpg",
            author: "Robert Bryndza"
        },
        {
            id: 3,
            title: "The Girls Who Disappeared",
            price: 8,
            rating: 4.2,
            image: "crime thrillers/image3.jpg",
            author: "Claire Douglas"
        },
        {
            id: 4,
            title: "Shadow Sands",
            price: 12,
            rating: 4.6,
            image: "crime thrillers/image4.jpg",
            author: "Robert Bryndza"
        },
        {
            id: 5,
            title: "Deadly Secrets",
            price: 7,
            rating: 4.0,
            image: "crime thrillers/image5.jpg",
            author: "Robert Bryndza"
        },
        {
            id: 6,
            title: "The Women Who Lied",
            price: 20,
            rating: 4.9,
            image: "crime thrillers/image6.jpg",
            author: "Claire Douglas"
        }
    ];

    const bookListElement = document.getElementById('book-list');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const sortSelect = document.getElementById('sort');
    const cartLink = document.getElementById('cart-link');

    // Initialize the cart from localStorage or as an empty array
    let cart = JSON.parse(localStorage.getItem("cart-crime")) || [];

    // Function to display books
    function displayBooks(filteredBooks) {
        bookListElement.innerHTML = '';  // Clear the previous books
        filteredBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.dataset.price = book.price;
            bookCard.dataset.rating = book.rating;
            bookCard.dataset.id = book.id;
            bookCard.dataset.title = book.title;

            bookCard.innerHTML = `
                <img src="${book.image}" alt="${book.title}" class="thumbnail">
                <div class="book-details">
                    <h3>${book.title}</h3>
                    <p>by ${book.author}</p>
                    <p>Price: $${book.price}</p>
                    <p>Rating: ${book.rating}⭐</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
            bookListElement.appendChild(bookCard);
        });
    }

    // Add to cart functionality
    function addToCart(bookId) {
        const selectedBook = books.find(book => book.id === bookId);
        
        // Check if the book already exists in the cart
        const existingBook = cart.find(item => item.id === bookId);
        if (existingBook) {
            existingBook.quantity += 1; // Increment the quantity if the book is already in the cart
        } else {
            // Add new book with quantity 1
            selectedBook.quantity = 1;
            cart.push(selectedBook);
        }

        // Save updated cart to localStorage
        localStorage.setItem("cart-crime", JSON.stringify(cart));

        // Update cart link text
        cartLink.classList.remove('hidden');
        cartLink.textContent = `Cart (${cart.length})`;
    }

    // Event listener for Add to Cart buttons
    bookListElement.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const bookId = parseInt(event.target.closest('.book-card').dataset.id);
            addToCart(bookId);
        }
    });

    // Handle search functionality
    searchButton.addEventListener('click', function () {
        const query = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query));
        displayBooks(filteredBooks);
    });

    // Handle sorting functionality
    sortSelect.addEventListener('change', function () {
        const sortBy = sortSelect.value;
        let sortedBooks = [...books];  // Copy the books array to avoid mutating the original

        if (sortBy === 'price') {
            sortedBooks.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        }

        displayBooks(sortedBooks);
    });

    // Display initial books
    displayBooks(books);

    // Update cart link on page load if there are items in the cart
    if (cart.length > 0) {
        cartLink.classList.remove('hidden');
        cartLink.textContent = `Cart (${cart.length})`;
    }
});
