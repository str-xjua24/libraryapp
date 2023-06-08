let myLibrary = [];
let numOfBooks = 0;

const addBtn = document.getElementById('add-book-btn');
const modal = document.getElementById('book-modal');
const closeModal = document.querySelector('.close');
const submitModal = document.getElementById('submit-book-btn');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('isRead');
const deleteBtn = document.querySelector('.btn-delete');

const libraryTable = document.getElementById('book-table');

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.toggleReadStatus = () => {
  console.log('do something');
}

function updateDOM() {
  const book = myLibrary[myLibrary.length-1];

  const row = document.createElement('tr');

  const titleCol = document.createElement('td');
  titleCol.textContent = book.title;

  const authorCol = document.createElement('td');
  authorCol.textContent = book.author;

  const pagesCol = document.createElement('td');
  pagesCol.textContent = book.pages;

  const statusCol = document.createElement('td');
  const statusBtn = document.createElement('button');
  statusBtn.classList.add('btn', 'btn-status');

  if (book.isRead === 'true') {
    statusBtn.textContent = 'Read';
  } else {
    statusBtn.textContent = 'Not Read';
  }

  const deleteCol = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn', 'btn-delete');
  deleteBtn.textContent = 'X';

  row.appendChild(titleCol);
  row.appendChild(authorCol);
  row.appendChild(pagesCol);
  row.appendChild(statusCol);
  statusCol.appendChild(statusBtn);
  row.appendChild(deleteCol);
  deleteCol.appendChild(deleteBtn);

  libraryTable.appendChild(row);

  deleteBtn.addEventListener('click', e => {
    const targetCol = e.target.parentElement;

    targetCol.parentElement.remove();

    myLibrary = myLibrary.filter((book) => {
      return book.title !== targetCol.parentElement.firstChild.textContent;
    });

    numOfBooks--;
    console.log('Number of books in library: ' + numOfBooks);
  });

  statusBtn.addEventListener('click', e => {
    if (e.target.textContent === 'Read') {
      e.target.textContent = 'Not Read';
      book.isRead = 'false';
    } else {
      e.target.textContent = 'Read';
      book.isRead = 'true';
    }
  });
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  numOfBooks++;
  console.log('Number of books in library: ' + numOfBooks);
}

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
  let readStatus = "false";
  if (readInput.checked) {
    readStatus = "true";
  }
  addBookToLibrary(new Book(titleInput.value, authorInput.value, pagesInput.value, readStatus));

  titleInput.value = ""; 
  authorInput.value = ""; 
  pagesInput.value = "";
  readInput.value = "";

  modal.style.display = 'none';
  updateDOM();
  console.log(myLibrary);
});

console.log("Librarian App Loaded");