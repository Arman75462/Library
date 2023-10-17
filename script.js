"use strict";

/* SELECTORS */
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const form = document.querySelector(".form");
const navButton = document.querySelector(".header__button");
const submitBookButton = document.querySelector(".form__button");
const bookTitleInput = document.querySelector(".form__title");
const bookAuthorInput = document.querySelector(".form__author");
const bookPagesInput = document.querySelector(".form__pages");
const bookReadInput = document.querySelector(".form__read");

/* // Where your books are
const myLibrary = [];

// Displays the books inside myLibrary on the console
function addBookToLibrary() {
  myLibrary.forEach(function (book) {
    console.log(book);
  });
}
addBookToLibrary(); */

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
navButton.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    showForm();
    header.style.transition = "all 0.5s";
  } else {
    hideForm();
    header.style.transition = "all 0.5s";
  }
});

submitBookButton.addEventListener("click", function () {
  let book = new Book(
    bookTitleInput.value,
    bookAuthorInput.value,
    bookPagesInput.value,
    bookReadInput.checked
  );
  main.textContent = `Title: ${bookTitleInput.value}, Author: ${bookAuthorInput.value}, Number of pages: ${bookPagesInput.value}, Read or not: ${bookReadInput.checked}`;

  bookTitleInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  bookReadInput.checked = false;
});

// Constructor function for creating a book
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

/* 1- When you click the submit button on the form, after having filled all your info, the info has to display on a card, on the main section of the website */

/* 2- 
2.1- Create an object whenever you click the submit button. 
2.2- Take that object,  */
