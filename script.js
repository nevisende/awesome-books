/* eslint-disable rule-you-want-to-disable */ 

const addBookButton = document.getElementById('add-book-button');
const body = document.querySelector('body');
let listBooks = [];


body.onload = () => {
  if (localStorage.getItem("listBooks")) {
    listBooks = JSON.parse(localStorage.getItem("listBooks"));
    };
}

function addBook(id) {
  const bookTitle = document.getElementById('book-title-input').value;
  const bookAuthor = document.getElementById('book-author-input').value;
  const book = { bookTitle, bookAuthor, id };
  listBooks.push(book);
  const listBooksString = JSON.stringify(listBooks);
  localStorage.setItem("listBooks", listBooksString);
};

function removeBook(id) {
  listBooks = listBooks.filter((el) => el.id !== id);
  const listBooksString = JSON.stringify(listBooks);
  localStorage.setItem("listBooks", listBooksString);
}

addBookButton.addEventListener('click', (e) => {
  const id = Math.round(Math.random() * 1000000);

  e.preventDefault();
  addBook(id);
});

