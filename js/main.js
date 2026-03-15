// Select Elements
const openFormBtn = document.querySelector(".open-form-btn");
const formModal = document.querySelector("#addBookModal");
const form = document.querySelector("#addBookForm");
const addBookBtn = document.querySelector(".add-book-btn");
const libraryContainer = document.querySelector(".books-grid");
const closeFormBtn = document.querySelector(".close-form-btn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const hasRead = document.querySelector("#isRead");

// Books Array
let library = [];

// Book Constructor
function Book(title, author, pages, hasRead) {
  if (!new.target) {
    throw new Error("Use new to create object");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.id = crypto.randomUUID();
}

// Event Listeners

// Open Form Button Listener
openFormBtn.addEventListener("click", () => {
  formModal.classList.remove("hidden");
});

// Add Book Button Listener
addBookBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (!title.value.trim() || !author.value.trim() || !pages.value) return;

  addBookToLibrary(
    title.value,
    author.value,
    Number(pages.value),
    hasRead.checked,
  );

  formModal.classList.add("hidden");

  form.reset();

  displayBooks();
});

//Form Close Button Listener
closeFormBtn.addEventListener("click", () => {
  formModal.classList.add("hidden");
});

// Book Grid Container Listener
libraryContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("toggle-read")) {
    const id = event.target.dataset.id;
    const book = library.find((book) => book.id === id);
    if (!book) return;

    book.hasRead = !book.hasRead;

    displayBooks();
    saveLibrary();
  }
  if (event.target.classList.contains("delete-book")) {
    const id = event.target.dataset.id;
    library = library.filter((book) => book.id !== id);

    displayBooks();
    saveLibrary();
  }
});

// Functions

// Add Books To Library Function
function addBookToLibrary(title, author, pages, hasRead) {
  library.push(new Book(title, author, pages, hasRead));
  saveLibrary();
}

// Display Books In Grid Function
function displayBooks() {
  libraryContainer.innerHTML = "";

  library.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>${book.pages} pages</p>
    <p>${book.hasRead ? "Read" : "Not Read"}</p>

    <button 
      class="toggle-read ${book.hasRead ? "read" : "not-read"}" 
      data-id="${book.id}">
      ${book.hasRead ? "Mark Unread" : "Mark Read"}
        </button>

    <button class="delete-book" data-id="${book.id}">Delete </button>
    `;

    libraryContainer.appendChild(card);
  });
}

// Save Library
function saveLibrary() {
  localStorage.setItem("library", JSON.stringify(library));
}

// Load Library
function loadLibrary() {
  const stored = localStorage.getItem("library");

  if (stored) {
    library = JSON.parse(stored);
  }
}

// Load and Display Library
loadLibrary();
displayBooks();
