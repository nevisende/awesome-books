/* eslint-disable linebreak-style */
import Book from './data.js';

const bookObj = new Book();

bookObj.display();

document.querySelector('#add-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title === '' || author === '') {
    document.querySelector('.error').innerText = 'Kindly make sure title and author are filled';
    return;
  }
  document.querySelector('.error').innerText = '';
  bookObj.add(title, author);
  document.querySelectorAll('.remove').forEach((elem) => {
    elem.addEventListener('click', (e) => bookObj.remove(e, e.currentTarget.dataset.id));
  });
});

function dateHandler() {
  // eslint-disable-next-line no-undef
  document.querySelector('#time').innerText = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS);
  setTimeout(dateHandler, 1000);
}
dateHandler();

const listLink = document.getElementById('list-link');
const addNewLink = document.getElementById('add-new-link');
const contactLink = document.getElementById('contact-link');
const listBooks = document.getElementById('list-books');
const addNew = document.getElementById('add-new');
const contact = document.getElementById('contact');

listLink.addEventListener('click', (e) => {
  e.preventDefault();
  listBooks.style.display = 'block';
  addNew.style.display = 'none';
  contact.style.display = 'none';
});

addNewLink.addEventListener('click', (e) => {
  e.preventDefault();
  listBooks.style.display = 'none';
  addNew.style.display = 'block';
  contact.style.display = 'none';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  listBooks.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'block';
});