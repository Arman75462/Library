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

/* Book-info selectors */
let bookInfo = document.querySelector(".book-info");
let bookInfoTitle = document.querySelector(".book-info__title");
let bookInfoAuthor = document.querySelector(".book-info__author");
let bookInfoPages = document.querySelector(".book-info__pages");
let bookInfoRead = document.querySelector(".book-info__read");
let bookInfoRemove = document.querySelector(".book-info__remove");

// Where your books are
const myLibrary = [];

// Displays the books inside myLibrary on the console
function addBookToLibrary() {
  myLibrary.forEach(function (book) {});
}

// Function to hide the form and reveal the main content
function hideForm() {
  form.classList.add("hidden");
  header.classList.remove("blur");
  main.classList.remove("blur");
  navButton.classList.remove("blur");
}

// Function to show the form and blur other content
function showForm() {
  form.classList.remove("hidden");
  header.classList.add("blur");
  main.classList.add("blur");
}

// Event listener to make form appear when clicking nav__button
navButton.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    showForm(); // Show the form
    header.style.transition = "all 500ms";
    main.style.transition = "all 500ms";
  } else {
    hideForm(); // Hide the form
    header.style.transition = "all 500ms";
    main.style.transition = "all 500ms";
  }
});

submitBookButton.addEventListener("click", function () {
  // Create a new book object with user input
  const book = new Book(
    bookTitleInput.value,
    bookAuthorInput.value,
    bookPagesInput.value,
    bookReadInput.checked
  );

  // Add the book to the library
  myLibrary.push(book);

  // Update the book info section with user input
  bookInfo.classList.remove("hidden");
  bookInfoTitle.textContent = bookTitleInput.value;
  bookInfoAuthor.textContent = bookAuthorInput.value;
  bookInfoPages.textContent = `${bookPagesInput.value} pages`;

  if (bookReadInput.checked === true) {
    bookInfoRead.textContent = "Read";
    bookInfoRead.style.border = "2px solid green";
    bookInfoRead.style.backgroundColor = "rgba(0, 174, 0, 0.524)";
  } else {
    bookInfoRead.textContent = "Not read";
    bookInfoRead.style.border = "2px solid red";
    bookInfoRead.style.backgroundColor = "rgba(255, 0, 0, 0.618)";
  }

  addBookToLibrary();

  // Reset form input fields
  hideForm();
  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  bookReadInput.checked = false;
});

// Constructor function for creating a book object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "has been read" : "hasn't been read yet"
    }`;
  };
}
