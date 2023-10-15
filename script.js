"use strict";

/* SELECTORS */
const main = document.querySelector("main");
const header = document.querySelector(".header");
const form = document.querySelector(".form");
const navButton = document.querySelector(".navigation__button");
const submitBookButton = document.querySelector(".form__button");

// Where your books are
const myLibrary = [];

// Constructor function for creating a book
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "has been read" : "hasn' t been red yet"
    }`;
  };
}

// Displays the books inside myLibrary on the console
function addBookToLibrary() {
  myLibrary.forEach(function (book) {
    console.log(book);
  });
}
addBookToLibrary();

// Function to hide form
function hideForm() {
  form.classList.add("hidden");
  header.classList.remove("blur");
  main.classList.remove("blur");
}

// Function to show form
function showForm() {
  form.classList.remove("hidden");
  header.classList.add("blur");
  main.classList.add("blur");
}

// Event listener to make form appear when clicking nav__button
navButton.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document level
  showForm();
});

// Event listener to hide the form when clicking outside of it
document.addEventListener("click", function (event) {
  if (event.target !== form && !form.classList.contains("hidden")) {
    hideForm();
  }
});
