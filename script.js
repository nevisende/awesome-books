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
