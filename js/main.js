let library = [];

function Book(title, author, pages, hasRead) {
  if (!new.target) {
    throw error("Use new to create object");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.id = crypto.randomUUID();
}

Book.prototype.display = function () {
  return `Title: ${this.title} , Author: ${this.title} , Pages: ${this.pages}, Read: ${this.hasRead}, ID: ${this.id}`;
};

function addBookToLibrary(title, author, pages, hasRead) {
  library.push(new Book(title, author, pages, hasRead));
  console.log(`${title} has been added to the library`);
}

function displayBooks() {
  for (let book of library) {
    console.log(book.display());
  }
}

// addBookToLibrary("1984", "George Orwell", 382);
// addBookToLibrary("Atomic Habit", "James Claire", 256);

// displayBooks();

// Select Elements
let openFormBtn = document.querySelector(".open-form-btn");
let formModal = document.querySelector("#addBookModal");
let form = document.querySelector("#addBookForm");
let addBookBtn = document.querySelector(".add-book-btn");

// Event Listeners
openFormBtn.addEventListener("click", () => {
  formModal.classList.remove("hidden");
});

addBookBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const hasRead = document.querySelector("#isRead").checked;

  addBookToLibrary(title, author, pages, hasRead);

  console.log(displayBooks());
});

//When Add Button is clicked the modal form is displayed.
//When Add Book Button on from is clicked extract the information from the form
//Create a new book object and put it inside array
//Use array to add the element to the grid.
