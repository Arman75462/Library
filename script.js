"use strict";

/* SELECTORS */
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const navButton = document.querySelector(".header__button");

/* Form selectors */
const form = document.querySelector(".form");
const submitBookButton = document.querySelector(".form__button");
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

  // A function to get book information
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "has been read" : "hasn't been read yet"
    }`;
  };
}

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

// Event listener to toggle the form visibility when clicking the "+ Add Book" button
navButton.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    showForm(); // Show the form
  } else {
    hideForm(); // Hide the form
  }
});

// Function to display all books in the library
function displayBooks() {
  main.innerHTML = ""; // Clear the main element

  myLibrary.forEach(function (index) {
    // Create a new book-info element for each book
    const bookInfoElement = document.createElement("section");
    bookInfoElement.classList.add("book-info");

    // Create elements to display book information
    const titleElement = document.createElement("h2");
    titleElement.classList.add("book-info__title");
    titleElement.textContent = bookTitleInput.value;

    const authorElement = document.createElement("p");
    authorElement.classList.add("book-info__author");
    authorElement.textContent = bookAuthorInput.value;

    const pagesElement = document.createElement("p");
    pagesElement.classList.add("book-info__pages");
    pagesElement.textContent = `${bookPagesInput.value} pages`;

    const readElement = document.createElement("span");
    readElement.classList.add("book-info__read");
    readElement.textContent = index.read ? "Read" : "Not read";

    if (index.read) {
      readElement.style.border = "2px solid green";
      readElement.style.backgroundColor = "rgba(0, 174, 0, 0.524)";
    } else {
      readElement.style.border = "2px solid red";
      readElement.style.backgroundColor = "rgba(255, 0, 0, 0.618)";
    }

    const removeElement = document.createElement("span");
    removeElement.classList.add("book-info__remove");
    removeElement.textContent = "Remove";

    // Remove the book from the library and re-display the books
    removeElement.addEventListener("click", function () {
      // Remove the book from the library at the specific index
      myLibrary.splice(index, 1);

      // Re-display the books to reflect the removal
      displayBooks();
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

  // If one of the form's input is not completed, showForm()
  if (
    bookTitleInput.value === "" ||
    bookAuthorInput.value === "" ||
    bookPagesInput.value === ""
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
