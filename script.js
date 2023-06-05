let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const addBtn = document.getElementById('add-book-btn');
const modal = document.getElementById('book-modal');
const closeModal = document.querySelector('.close');
const submitModal = document.getElementById('submit-book-btn');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('isRead');

const libraryTable = document.getElementById('book-table');

addBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});


closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

submitModal.addEventListener('click', () => {
  event.preventDefault();
  addBookToLibrary(new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value));

  titleInput.value = ""; 
  authorInput.value = ""; 
  pagesInput.value = "";
  readInput.value = "";

  modal.style.display = 'none';

  const book = myLibrary[myLibrary.length-1];

  const row = document.createElement('tr');
  const titleCol = document.createElement('td');
  titleCol.textContent = book.title;

  const authorCol = document.createElement('td');
  authorCol.textContent = book.author;

  const pagesCol = document.createElement('td');
  pagesCol.textContent = book.pages;

  const statusCol = document.createElement('td');
  statusCol.textContent = book.isRead;

  row.appendChild(titleCol);
  row.appendChild(authorCol);
  row.appendChild(pagesCol);
  row.appendChild(statusCol);

  libraryTable.appendChild(row);
});