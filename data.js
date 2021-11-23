/* eslint-disable class-methods-use-this */

import Utils from './utils.js';

const utilsObj = new Utils();
const noBook = document.querySelector('#no-data');

export default class Book {
  add(title, author) {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    let id;
    if (books.length === 0) {
      id = 0;
    } else {
      id = books.length;
    }
    books.push({ id, title, author });
    localStorage.setItem('books', JSON.stringify(books));
    utilsObj.render(title, author, id);
    utilsObj.clearInput();
    document.querySelector('#title').focus();
    noBook.textContent = '';
  }

  remove(e, id) {
    id = parseInt(id, 10);
    const stack = JSON.parse(localStorage.getItem('books'));
    const remStack = stack.filter((item) => item.id !== id);
    localStorage.setItem('books', JSON.stringify(remStack));
    e.currentTarget.parentElement.remove();
  }

  display() {
    const stack = JSON.parse(localStorage.getItem('books'));
    if (stack.length > 0) {
      stack.forEach((item) => {
        const { id, title, author } = item;
        utilsObj.render(title, author, id);
        document.querySelector('#title').focus();
      });
    } else {
      noBook.textContent = 'No book added yet';
    }
    document.querySelectorAll('.remove').forEach((elem) => {
      elem.addEventListener('click', (e) => {
        this.remove(e, e.currentTarget.dataset.id);
      });
    });
  }
}
