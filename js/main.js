let library = [];

function Book(title, author, pages) {
  if (!new.target) {
    throw error("Use new to create object");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = false;
  this.id = crypto.randomUUID();
}

Book.prototype.display = function () {
  return `Title: ${this.title} , Author: ${this.title} , Pages: ${this.pages}, Read: ${this.hasRead}, ID: ${this.id}`;
};

function addBookToLibrary(title, author, pages) {
  library.push(new Book(title, author, pages));
  console.log(`${title} has been added to the library`);
}

function displayBooks() {
  for (let book of library) {
    console.log(book.display());
  }
}

addBookToLibrary("1984", "George Orwell", 382);
addBookToLibrary("Atomic Habit", "James Claire", 256);

displayBooks();

// console.log(myBook.display());

// console.log(Object.getPrototypeOf(myBook));
// console.log(Book.prototype);

// myBook.valueOf();
