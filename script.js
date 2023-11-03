"use strict";

/* SELECTORS */
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const navButton = document.querySelector(".header__button");

/* Form selectors */
const form = document.querySelector(".form");
const submitBookButton = document.querySelector(".form__submit-form");
const closeFormButton = document.querySelector(".form__close-form");
const bookTitleInput = document.querySelector(".form__title");
const bookAuthorInput = document.querySelector(".form__author");
const bookPagesInput = document.querySelector(".form__pages");
const bookReadInput = document.querySelector(".form__read");

// Create an array to store your library of books
const myLibrary = [];

// Constructor function for creating a book object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/* This is classFeature */

// Function to hide the form and reveal the main content
function hideForm() {
  form.classList.add("hidden");
  header.classList.remove("blur");
  main.classList.remove("blur");

  // Transitions for smooth effect when hiding form
  header.style.transition = "all 500ms";
  main.style.transition = "all 500ms";
}

// Function to show the form and blur other content
function showForm() {
  form.classList.remove("hidden");
  header.classList.add("blur");
  main.classList.add("blur");

  // Transitions for smooth effect when showing form
  header.style.transition = "all 500ms";
  main.style.transition = "all 500ms";
}

// Event listener to add the form visibility
navButton.addEventListener("click", function () {
  showForm(); // Show the form
});

// Event listener to hide the form visibility and reset input fields
closeFormButton.addEventListener("click", function () {
  hideForm();
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  bookReadInput.checked = false;
});

// Function to display all books in the library
function displayBooks() {
  main.innerHTML = ""; // Clear the main element

  myLibrary.forEach(function (book) {
    // Create a new book-info element for each book
    const bookInfoElement = document.createElement("section");
    bookInfoElement.classList.add("book-info");

    // Create elements to display book information
    const titleElement = document.createElement("h2");
    titleElement.classList.add("book-info__title");
    titleElement.textContent = book.title;

    const authorElement = document.createElement("p");
    authorElement.classList.add("book-info__author");
    authorElement.textContent = book.author;

    const pagesElement = document.createElement("p");
    pagesElement.classList.add("book-info__pages");
    pagesElement.textContent =
      book.pages === "1" ? "1 page" : `${book.pages} pages`;

    const readElement = document.createElement("span");
    readElement.classList.add("book-info__read");
    readElement.textContent = book.read ? "Read" : "Not read";

    if (book.read) {
      readElement.style.border = "2px solid green";
      readElement.style.backgroundColor = "rgba(0, 174, 0, 0.524)";
    } else {
      readElement.style.border = "2px solid red";
      readElement.style.backgroundColor = "rgba(255, 0, 0, 0.618)";
    }

    const removeElement = document.createElement("span");
    removeElement.classList.add("book-info__remove");
    removeElement.textContent = "Remove";

    removeElement.addEventListener("click", function () {
      // Find the index of the book to remove
      const indexToRemove = myLibrary.indexOf(book);

      // Check if the index exists in the array (to handle potential issues)
      if (indexToRemove !== -1) {
        // Remove the book from the library at the specific index
        myLibrary.splice(indexToRemove, 1);

        // Re-display the books to reflect the removal
        displayBooks();
      }
    });

    // Append elements to the book-info element
    bookInfoElement.appendChild(titleElement);
    bookInfoElement.appendChild(authorElement);
    bookInfoElement.appendChild(pagesElement);
    bookInfoElement.appendChild(readElement);
    bookInfoElement.appendChild(removeElement);

    // Append the book-info element to the main element
    main.appendChild(bookInfoElement);
  });
}

// Add book-info to the library in code and UI form
submitBookButton.addEventListener("click", function () {
  // Create a new book object with user input
  const book = new Book(
    bookTitleInput.value,
    bookAuthorInput.value,
    bookPagesInput.value,
    bookReadInput.checked
  );

  // If one of the form's input is not completed, display warning
  if (
    bookTitleInput.value === "" ||
    bookAuthorInput.value === "" ||
    bookPagesInput.value === "" ||
    bookPagesInput.value > 10000 ||
    bookPagesInput.value < 1
  ) {
    showForm();
  } else {
    // Add the book to the library
    myLibrary.push(book);

    // Display all books in the library
    displayBooks();

    // Reset form input fields
    hideForm();
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookPagesInput.value = "";
    bookReadInput.checked = false;
  }
});
