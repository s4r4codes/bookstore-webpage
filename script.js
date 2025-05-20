document.addEventListener("DOMContentLoaded", () => {
  // Select the "Books" navigation link
  const booksLink = document.querySelector('.navbar ul li a[href="#books"]');

  if (booksLink) {
      booksLink.addEventListener("click", (event) => {
          const booksSection = document.getElementById("books"); // Target the "Books" section

          if (booksSection) {
              event.preventDefault(); // Prevent default link behavior

              // Smooth scroll to the "Books" section
              booksSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start", // Align the top of the section with the viewport
              });
          }
      });
  }
});




// Select the navigation bar link for "Review"
const reviewLink = document.querySelector('nav ul li:nth-child(4) a'); 

// Add a click event listener to the link
reviewLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  // Get the "Review" section element
  const reviewSection = document.getElementById('review');

  // Scroll smoothly to the top of the "Review" section
  reviewSection.scrollIntoView({ behavior: 'smooth' });
});


// JavaScript for handling contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission (page reload)

      // Show the success message
      successMessage.style.display = "block";

      // Optionally, you can hide the success message after a few seconds
      setTimeout(() => {
          successMessage.style.display = "none";
      }, 3000); // Hide the message after 3 seconds
  });
});



       



 