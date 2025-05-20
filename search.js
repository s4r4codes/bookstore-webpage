// Sample book data
const books = [
    "Diary of a wimpy kid",
    "Collide",
    "Pride Prejudice",
    "Things We Never Got Over",
    "Field Notes on LOVE",
    "The Prince Bride",
    "VERITY",
    "Darkness Falls",
    "The Girl in the ICE",
    "The Girlss Who Disappeared",
    "Shadow Sands",
    "Deadly Secrets",
    "The Women Who Lied",
    "Horrors of the Night",
    "The siren and the Specter",
    "The Canterville Ghost",
    "The Exorcist",
    "The Book of Accidents",
    "Ghost Eaters"
];

// Function to handle search
function handleSearch() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.getElementById("results");

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Filter books based on query
    const filteredBooks = books.filter(book =>
        book.toLowerCase().includes(query)
    );

    // Display results
    if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.className = "result-item";
            bookElement.textContent = book;
            resultsContainer.appendChild(bookElement);
        });
    } else {
        resultsContainer.textContent = "No books found.";
    }
}

// Add event listener to search button
document.getElementById("search-button").addEventListener("click", handleSearch);
