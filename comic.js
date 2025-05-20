document.addEventListener("DOMContentLoaded", function () {
    const books = [
        {
            id: 1,
            title: "Diary of a Wimpy Kid",
            price: 10,
            rating: 4.5,
            image: "comedy/images (1).jpg",
            author: "Jeff Kinney"
        },
        {
            id: 2,
            title: "Diary of a Wimpy Kid",
            price: 15,
            rating: 4.8,
            image: "comedy/images (2).jpg",
            author: "Jeff Kinney"
        },
        {
            id: 3,
            title: "Diary of a Wimpy Kid",
            price: 8,
            rating: 4.2,
            image: "comedy/images (3).jpg",
            author: "Jeff Kinney"
        },
        {
            id: 4,
            title: "Diary of a Wimpy Kid",
            price: 12,
            rating: 4.6,
            image: "comedy/images (4).jpg",
            author: "Jeff Kinney"
        },
        {
            id: 5,
            title: "Diary of a Wimpy Kid",
            price: 7,
            rating: 4.0,
            image: "comedy/images.jpg",
            author: "Jeff Kinney"
        },
        {
            id: 6,
            title: "Diary of a Wimpy Kid",
            price: 20,
            rating: 4.9,
            image: "comedy/img6.jpg",
            author: "Jeff Kinney"
        }
    ];

    const bookListElement = document.getElementById('book-list');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const sortSelect = document.getElementById('sort');
    const cartLink = document.getElementById('cart-link');

    // Use a unique key for the comic cart
    let cart = JSON.parse(localStorage.getItem("cart-comic")) || [];

    // Function to display books
    function displayBooks(filteredBooks) {
        bookListElement.innerHTML = '';  // Clear existing books
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

        // Save updated cart to localStorage with the unique key
        localStorage.setItem("cart-comic", JSON.stringify(cart));

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

    // Initial display of all books
    displayBooks(books);
});
