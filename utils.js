/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

export default class Utils {
  displayHTML(title, author, id) {
    return `
    <li class="book" style="list-style:none;">
    <p><span class="title">"${title}"</span> by <span class="author">${author}</span></p>
    <button class="remove" data-id=${id}>Remove</button>
  </li>
    `;
  }

  render(title, author, id) {
    document
      .querySelector('#lists')
      .insertAdjacentHTML('beforeend', this.displayHTML(title, author, id));
  }

  clearInput() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
