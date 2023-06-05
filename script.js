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

// const book1 = new Book('Neuromancer', 'William Gibson', 256, 0);
// const book2 = new Book('Frankenstein', 'Mary Shelley', 332, 1);
// const book3 = new Book('Darkhold', 'Cthon', 666, 0);

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);

// myLibrary.forEach(book => {
//   console.log(book);
// })

const addBtn = document.getElementById('add-book');
