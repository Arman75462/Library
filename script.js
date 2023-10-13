"use strict";

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

/* 
1) T'a besoin d'une option pour rentrer le nom du livre, l' auteur du livre, et si la personne a lu le livre ou pas.

2) Ensuite, tu clique sur un boutton qui va envoyer ces informations dans une section où tu va voir ces informations se sauvegarder dans ta page

3) Si ta rien compris va voir les exemples dans TOP */
