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
  return `Title: ${this.title} , Author: ${this.author} , Pages: ${this.pages}, Read: ${this.hasRead}, ID: ${this.id}`;
};

function addBookToLibrary(title, author, pages, hasRead) {
  library.push(new Book(title, author, pages, hasRead));
  console.log(`${title} has been added to the library`);
}

// function displayBooks() {
//   for (let book of library) {
//     console.log(book.display());
//   }
// }

// Select Elements
const openFormBtn = document.querySelector(".open-form-btn");
const formModal = document.querySelector("#addBookModal");
const form = document.querySelector("#addBookForm");
const addBookBtn = document.querySelector(".add-book-btn");
const libraryContainer = document.querySelector(".books-grid");

// Event Listeners
openFormBtn.addEventListener("click", () => {
  formModal.classList.remove("hidden");
});

addBookBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const hasRead = document.querySelector("#isRead");

  addBookToLibrary(title.value, author.value, pages.value, hasRead.checked);

  formModal.classList.add("hidden");

  form.reset();

  displayBooks();
});

// Display Books in grid
function displayBooks() {
  libraryContainer.innerHTML = "";

  library.forEach(function (book) {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>${book.pages} pages</p>
    <p>${book.hasRead ? "Read" : "Not Read"}</p>
    `;

    libraryContainer.appendChild(card);
  });
}

//Use array to add the element to the grid.
